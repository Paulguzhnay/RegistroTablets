import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { RTablet } from 'src/app/domain/RegTablet';
import { DocenteWS } from 'src/app/domain/docentews';
import { MateriaWS } from 'src/app/domain/materiaws';
import { DocenteswsService } from '../services/docentesws.service';
import { MateriawsService } from '../services/materiaws.service';
import {  ListTabletwsService } from '../services/list-tabletws.service';

import jsQR from 'jsqr';
import { EstudianteWS } from 'src/app/domain/estudiantews';
import { Condition } from 'selenium-webdriver';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registrar-prestamo',
  templateUrl: './registrar-prestamo.page.html',
  styleUrls: ['./registrar-prestamo.page.scss'],
})
export class RegistrarPrestamoPage{
  constructor(private toasstCtrl: ToastController, private loadingCtrl: LoadingController,private tabletWS: ListTabletwsService,private docenteWS: DocenteswsService,private materiaWS: MateriawsService) {} 
  
  tablet: RTablet = new RTablet();
  tablet2: any;
  docente:DocenteWS = new DocenteWS();
  materia:MateriaWS = new MateriaWS();
  estudiante:EstudianteWS = new EstudianteWS();
  materias:any;
  docentes: any;
  estTablet:any;
  estudiantes:any;
  cargarMaterias(): void{
    this.materias = this.docenteWS.getMaterias();
  }
  cargarDocentes(): void{
    this.docentes = this.materiaWS.getDocentes();
  }
  ngOnInit(): void {
    this.cargarMaterias()
    this.cargarDocentes()
  }

  buscarEstTablet(){
    this.tabletWS.buscarEst(this.tablet.materia.id).subscribe(data=>{
        this.estudiantes = data;
        console.log(this.estudiantes);
    });

  }
  guardarRT(){
    console.log(this.tablet)
    /*if (this.materia.nombre==""||this.materia.docente.id==0) {
      
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Datos Vacios',
      })
    } 
    
    else {*/
    this.tabletWS.insertarTabletR(this.tablet).subscribe(data=>{
      console.log(this.tablet)
      console.log(data)
    })   
/*      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'La materia ha sido creada exitosamente',
        showConfirmButton: false,
        timer: 1500
      })
      this.materia.nombre=''
      this.materia.docente.id=0    
    }*/
  
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
    const codigo = this.resultadoEscaner.split(" ");
    console.log(codigo.length)
    console.log(codigo[4])
    if (codigo.length == 5){
      this.tablet2 = this.tabletWS.verificarTablet(codigo[4]);
      console.log("hola",this.tablet2)
      if(this.tablet2 == null){
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Error',
          text: 'Tablet no registrada',
          heightAuto: false,
          timer:8500
        })
      }else{
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Informacion de la Tablet',
          text: this.resultadoEscaner,
          heightAuto: false,
          timer:8500
        })
      }
      

    }else{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Error',
        text: 'No es codigo QR de una tablet',
        heightAuto: false,
        timer:8500
      })
    }

  }


}

