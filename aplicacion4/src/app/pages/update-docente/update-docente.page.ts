import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { DocenteWS } from 'src/app/domain/docentews';
import { DocenteswsService } from '../services/docentesws.service';

@Component({
  selector: 'app-update-docente',
  templateUrl: './update-docente.page.html',
  styleUrls: ['./update-docente.page.scss'],
})
export class UpdateDocentePage implements OnInit {

  docente: DocenteWS = new DocenteWS();
  docente1: DocenteWS = new DocenteWS();
  docentes: any;

  constructor(private docenteService: DocenteswsService, @Inject(DOCUMENT) private _document: Document) { }

  ngOnInit(): void {
    this.cargarDocentes();
  }

  cargarDocentes(): void{
    this.docentes = this.docenteService.getDocentes();
  }

  

  actualizarInformacion(docenteActualizar: DocenteWS): void{
    this.docente = docenteActualizar;
    this.docente1 = docenteActualizar;
  }

  guardarDatos(){
    this.docenteService.update(this.docente).subscribe(data => {
      console.log(data);
    });
    console.log(this.docente);
    this.cargarDocentes();
    this._document.defaultView?.location.reload(); 
  }

}

