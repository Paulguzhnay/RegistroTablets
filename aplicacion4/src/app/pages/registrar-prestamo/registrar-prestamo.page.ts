import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import jsQR from 'jsqr';
@Component({
  selector: 'app-registrar-prestamo',
  templateUrl: './registrar-prestamo.page.html',
  styleUrls: ['./registrar-prestamo.page.scss'],
})
export class RegistrarPrestamoPage{
  escanerActivo = false;
  resultadoEscaner = null;
  @ViewChild('video', {static: false}) video: ElementRef;
  @ViewChild('canvas', {static: false}) canvas: ElementRef;  
  videoElements: any;
  canvasElements: any;
  canvasContext: any;
  loading: HTMLIonLoadingElement;
  constructor(private toasstCtrl: ToastController, private loadingCtrl: LoadingController ) {} 

  ngOnInit(){
    
  }
  ngAfterViewInit(): void{
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

  }
  async visualizarQrToast(){
    const toast = await this.toasstCtrl.create({
      message: 'Open ${this.resultadoEscaner}?',
      position: 'top',
      buttons: [
        {
          text: "Open",
          handler: () => {
            window.open(this.resultadoEscaner, '_system', 'location=yes')
          }
        }
      ]
    });
    toast.present();
  }


}

