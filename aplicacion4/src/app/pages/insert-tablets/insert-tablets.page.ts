import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ListTabletwsService } from '../services/list-tabletws.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { Tablet } from 'src/app/domain/tablets';
import { empty } from 'rxjs';
import Swal from 'sweetalert2';
import jsQR from 'jsqr';
@Component({
  selector: 'app-insert-tablets',
  templateUrl: './insert-tablets.page.html',
  styleUrls: ['./insert-tablets.page.scss'],
})
export class InsertTabletsPage implements OnInit {
  TabletGrupo:Tablet=new Tablet;
  constructor(private TabletService: ListTabletwsService, private loadingCtrl: LoadingController) { }

  ngOnInit(): void {
  }
  guardarD(){

    if (this.TabletGrupo.nombre==""||this.TabletGrupo.laboratorio==""||this.TabletGrupo.codigo=="") {
      
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        timer: 1500,
        heightAuto: false
      })
    } else {
      this.TabletService.registrarTablet(this.TabletGrupo).subscribe(data=>{
        console.log(data)
      })
   
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'La tablet ha sido creada exitosamente',
        showConfirmButton: false,
        heightAuto: false,
        timer: 1500
      })
      this.TabletGrupo.codigo=''
      this.TabletGrupo.laboratorio=''
      this.TabletGrupo.nombre=''
      
    } 
  }

  escanerActivo = false;
  resultadoEscaner = null;
  @ViewChild('video', {static: false}) video: ElementRef;
  @ViewChild('canvas', {static: false}) canvas: ElementRef;
  @ViewChild('fileinput', { static: false }) fileinput: ElementRef;

  videoElements: any;
  canvasElements: any;
  canvasContext: any;
  loading: HTMLIonLoadingElement;

  ngAfterViewInit(){
    this.videoElements = this.video.nativeElement;
    this.canvasElements = this.canvas.nativeElement;
    this.canvasContext = this.canvasElements.getContext('2d');
  }

  async escanear(){
    console.log("Escanear");
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'enviroment'}
    });
    this.videoElements.srcObject = stream;
    this.videoElements.setAttribute('playsinline', true);
    this.videoElements.play();
    this.loading = await this.loadingCtrl.create({});
    await this.loading.present();
    requestAnimationFrame(this.escanearCodigo.bind(this));
    
  }

  async escanearCodigo(){

    if(this.videoElements.readyState == this.videoElements.HAVE_ENOUGH_DATA){
      if(this.loading){
        await this.loading.dismiss();
        this.loading = null;
        this.escanerActivo = true;
      }

      this.videoElements.height = this.videoElements.videoHeight;
      this.canvasElements.width = this.videoElements.videoWidth;

      this.canvasContext.drawImage(this.videoElements, 0, 0, this.canvasElements.width, this.canvasElements.height);

      const imageData = this.canvasContext.getImageData(0, 0, this.canvasElements.width, this.canvasElements.height);
      
      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert'
      });

      if(code){
        this.escanerActivo = false;
        this.resultadoEscaner = code.data;
        this.visualizarQrToast();

      }else{
        if(this.escanerActivo){
          requestAnimationFrame(this.escanearCodigo.bind(this));
        }
      }

    }else{
      requestAnimationFrame(this.escanearCodigo.bind(this));
    }
  }

  detener(){
    this.escanerActivo = false;
  }

  reset(){
    this.resultadoEscaner = null;
    this.detener();

  }

  async visualizarQrToast(){
    this.verificar();
  }

  captureImage() {
    this.fileinput?.nativeElement.click();
  }
   
  handleFile(event: any) {
    let file: any = <HTMLInputElement>event.target.files
    if (!file?.length) { return; }
    file = file[0];
   
    var img = new Image();
    img.onload = () => {

      this.canvasContext.drawImage(img, 0, 0, this.canvasElements.width, this.canvasElements.height);
      const imageData = this.canvasContext.getImageData(0, 0, this.canvasElements.width, this.canvasElements.height);
      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert'
      });
   
      if (code) {
        this.resultadoEscaner = code.data;
        this.visualizarQrToast();
      }
    };
    img.src = URL.createObjectURL(file);
  }

  /*  buscarEstTablet(){
    this.tabletWS.buscarEst(this.tablet.materia.id).subscribe(data=>{
        this.estudiantes = data;
        console.log(this.estudiantes);
    });*/ 

  verificar(){
    let codigo = this.resultadoEscaner.split("\n");
    console.log(codigo.length);

    let corte = codigo[0].split("\n");
    console.log("***",corte[0].length)
    console.log(codigo[0].length);
    console.log(codigo[1]);
    if (codigo.length == 3){
      let codigoTablet = codigo[2].split(" ");
      console.log(codigoTablet[1]);
      //this.TabletGrupo.nombre = codigo[0];
      if(codigo[0].length==10){
      
        console.log("HOLA 10")
        var nomC = codigo[0];
        console.log("///",nomC.substring(0,9).length);
        this.TabletGrupo.nombre = nomC.substring(0,9);      
        this.TabletGrupo.laboratorio = codigo[1];
        this.TabletGrupo.codigo = codigoTablet[1];
    
        
      }else if(codigo[0].length==9){
        console.log("HOLA 9")
        var nomC = codigo[0];
        console.log("///",nomC.substring(0,8).length);
        this.TabletGrupo.nombre = nomC.substring(0,8);      
        this.TabletGrupo.laboratorio = codigo[1];
        this.TabletGrupo.codigo = codigoTablet[1];
    
      }


    }else{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Error de Escaneo',
        text: 'El Codigo escaneado no pertenece a ninguna tablet',
        heightAuto: false,
        timer:8500
      })
    }
  }
}
