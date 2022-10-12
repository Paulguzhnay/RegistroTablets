import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { registrarE } from 'src/app/domain/estudiante';
import { EstudianteWS } from 'src/app/domain/estudiantews';
import { EstudiantewsService } from '../services/estudiantews.service';
import { MateriaWS } from 'src/app/domain/materiaws';
import { DocenteswsService } from '../services/docentesws.service';
import { RTablet } from 'src/app/domain/RegTablet';
import { DocenteWS } from 'src/app/domain/docentews';
import jsQR from 'jsqr';
import {  ListTabletwsService } from '../services/list-tabletws.service';
import Swal from 'sweetalert2';
import { Tablet } from 'src/app/domain/tablets';
@Component({
  selector: 'app-registrar-estudiante',
  templateUrl: './registrar-estudiante.page.html',
  styleUrls: ['./registrar-estudiante.page.scss'],
})
export class RegistrarEstudiantePage implements OnInit {



//
tablet: RTablet = new RTablet();
tablet2: any;
docente:DocenteWS = new DocenteWS();
materia:MateriaWS = new MateriaWS();
estudiante:EstudianteWS = new EstudianteWS();
tabletM:Tablet = new Tablet();
materias:any;
tabletName:string;
docentes: any;
estTablet:any;
estudiantes:any;
n1:any;
n2:any;
name:any;
  constructor(private estudianteWS: EstudiantewsService,
    private docenteWS: DocenteswsService,
    private loadingCtrl: LoadingController,
    private tabletWS: ListTabletwsService,
    private TabletService: ListTabletwsService) { }

  ngOnInit(): void {
    this.cargarMaterias();
    this.cargarTablets();
  }
  cargarMaterias(): void{
    this.materias = this.docenteWS.getMaterias();

  }
  guardar(){
    
    this.estudianteWS.verificarTabRegistrado(this.estudiante.codTablet).subscribe(dataT=>{
      console.log("BANDERA TABLET",dataT)
      console.log("codigo ",this.estudiante.codTablet)
      if(dataT==true){
        this.estudianteWS.verificarEstRegistrado(this.estudiante.nombre,this.estudiante.apellido,this.estudiante.carrera).subscribe(data1=>{
          console.log("BANDERA Estudiante",data1)
          if(data1==true){
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: 'Error',
              text: 'Estudiante ya registrado',
              heightAuto: false,
              timer:8500
            })
          }
          if(data1==false){
            this.estudianteWS.registrarEstudiante(this.estudiante).subscribe(data=>{
              console.log("-------------------------------------------")
              console.log(this.estudiante)
            })
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Estudiante Registrado con exito',
              heightAuto: false,
              timer:8500
            })
            window.location.href="/registrar-estudiante"
        
          }
        })
      }
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Error',
        text: 'Tablet No Registrada',
        heightAuto: false,
        timer:8500
      })

    })

  }
  tablets:any
  cargarTablets(){
    this.tablets=this.TabletService.getTablet();
  }

  //-----------------------------------------------------------
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
      console.log('code: ', code);

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
        this.estudiante.codTablet = nomC.substring(0,9);      

      }else if(codigo[0].length==9){
        console.log("HOLA 9")
        var nomC = codigo[0];
        console.log("///",nomC.substring(0,8).length);
        this.estudiante.codTablet = nomC.substring(0,8);      
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
