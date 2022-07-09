import { Component, OnInit } from '@angular/core';
import { DocenteswsService } from '../services/docentesws.service';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { DocenteWS } from 'src/app/domain/docentews';
import { EstudianteWS } from 'src/app/domain/estudiantews';
import { EstudiantewsService } from '../services/estudiantews.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { MateriaWS } from 'src/app/domain/materiaws';

@Component({
  selector: 'app-update-estudiantes',
  templateUrl: './update-estudiantes.page.html',
  styleUrls: ['./update-estudiantes.page.scss'],
})
export class UpdateEstudiantesPage implements OnInit {
  constructor(private estudianteService: EstudiantewsService,  private _route: ActivatedRoute,private docenteWS: DocenteswsService) { }
  estudiante: EstudianteWS = new EstudianteWS();
  estudiante2: EstudianteWS = new EstudianteWS();
  estudiantes: any;
  materia:MateriaWS = new MateriaWS();
  materias:any;
  id: string="";
  id1: number=0;

  ngOnInit(): void {
    let id = this._route.snapshot.paramMap.get('id');
    console.log(id)
    this.id = `${id}`
    this.id1= Number(this.id)
    this.estudiante.id= Number(this.id)
    this.cargarEstudiantes();
    this.cargarMaterias();
  }

  cargarEstudiantes(){
    this.estudianteService.buscarEstudiante(this.estudiante.id).subscribe(estudiantes=>{
      this.estudiante2 = estudiantes
      this.estudiante = this.estudiante2
    })
  }

  cargarMaterias(): void{
    this.materias = this.docenteWS.getMaterias();
    console.log("Hola");
    console.log("Hola2"+this.docenteWS.getMaterias());
  }

  guardarDatos(): void{
    this.estudianteService.update(this.estudiante).subscribe(data=>{
      console.log(data)
    })
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Estudiante Actualizado',
      
      timer:8500
    })

    window.location.href="/listar-estudiantes"
  }

}

