import { Component, OnInit } from '@angular/core';
import { DocenteswsService } from '../services/docentesws.service';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { DocenteWS } from 'src/app/domain/docentews';
import { EstudianteWS } from 'src/app/domain/estudiantews';
import { EstudiantewsService } from '../services/estudiantews.service';

@Component({
  selector: 'app-update-estudiantes',
  templateUrl: './update-estudiantes.page.html',
  styleUrls: ['./update-estudiantes.page.scss'],
})
export class UpdateEstudiantesPage implements OnInit {

  estudiante: EstudianteWS = new EstudianteWS();
  estudiantes: any;

  constructor(private estudianteService: EstudiantewsService, @Inject(DOCUMENT) private _document: Document) { }

  ngOnInit(): void {
    this.cargarEstudiantes();
  }

  cargarEstudiantes(){
    this.estudiantes = this.estudianteService.getEstudiantes();
  }

  actualizarInformacion(estudianteActualizar: EstudianteWS): void{
    this.estudiante = estudianteActualizar;
  }

  guardarDatos(){
    this.estudianteService.update(this.estudiante).subscribe(data => {
      console.log(data);
    });
    console.log(this.estudiante);
    this.cargarEstudiantes();
    this._document.defaultView?.location.reload(); 
  }

}

