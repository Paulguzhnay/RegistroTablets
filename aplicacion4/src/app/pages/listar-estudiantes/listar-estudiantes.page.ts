import { Component, OnInit } from '@angular/core';
import { EstudianteWS } from 'src/app/domain/estudiantews';
import { EstudiantewsService } from '../services/estudiantews.service';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-listar-estudiantes',
  templateUrl: './listar-estudiantes.page.html',
  styleUrls: ['./listar-estudiantes.page.scss'],
})
export class ListarEstudiantesPage implements OnInit {

  estudiante: EstudianteWS = new EstudianteWS;
  estudiantes: any;
  constructor(private estudianteService: EstudiantewsService, @Inject(DOCUMENT) private _document: Document) { }

  ngOnInit(): void {
    this.cargarEstudiantes();

  }
  cargarEstudiantes(){
    this.estudiantes = this.estudianteService.getEstudiantes();
  }

  eliminar(id: Number){
    if (window.confirm('¿Estás seguro de eliminar estudiante?')) {
      console.log(id)
      this.estudianteService.eliminart(id).subscribe();
      window.location.reload();
    }
  }

}

