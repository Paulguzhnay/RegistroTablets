import { Component, OnInit } from '@angular/core';
import { EstudianteWS } from 'src/app/domain/estudiantews';
import { EstudiantewsService } from '../services/estudiantews.service';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { RTablet } from 'src/app/domain/RegTablet';

@Component({
  selector: 'app-listar-estudiantes',
  templateUrl: './listar-estudiantes.page.html',
  styleUrls: ['./listar-estudiantes.page.scss'],
})
export class ListarEstudiantesPage implements OnInit {

  estudiante: EstudianteWS = new EstudianteWS;
  estudiantePrueba: EstudianteWS = new EstudianteWS;
  estudiantes: any;
  estudianteE:any;
  registroU:any;
  datosU: RTablet = new RTablet();
  constructor(private estudianteService: EstudiantewsService, @Inject(DOCUMENT) private _document: Document) { }

  ngOnInit(): void {
    this.cargarEstudiantes();

  }
  cargarEstudiantes(){
    this.estudiantes = this.estudianteService.getEstudiantes();
  }

  eliminar(id: Number){
    if (window.confirm('¿Estás seguro de eliminar estudiante?')) {


      //this.estudianteService.eliminart(id).subscribe();
      //window.location.reload();

    ////////////////////////////////////////////////////////////////////
    this.estudianteService.estudiantesRegistroTablet(id).subscribe(data=>{
      this.registroU = data;

      let dimension = this.registroU.length


      let i = 0;

      while(i < dimension){

            this.datosU.estudiante = this.estudiantePrueba;

            this.datosU.id = this.registroU[i].id;
            this.datosU.fecha=this.registroU[i].fecha;
            this.datosU.estado=this.registroU[i].estado;
            this.datosU.tablet=this.registroU[i].tablet;

            
            this.estudianteService.updateR(this.datosU);


            i+=1;
      }

    });









    }
  }

}

