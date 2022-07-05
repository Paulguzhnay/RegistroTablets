import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { registrarE } from 'src/app/domain/estudiante';
import { EstudianteWS } from 'src/app/domain/estudiantews';
import { EstudiantewsService } from '../services/estudiantews.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registrar-estudiante',
  templateUrl: './registrar-estudiante.page.html',
  styleUrls: ['./registrar-estudiante.page.scss'],
})
export class RegistrarEstudiantePage implements OnInit {
  estudiante: EstudianteWS = new EstudianteWS();



  constructor(private estudianteWS: EstudiantewsService) { }

  ngOnInit(): void {
  }

  guardar(){
    
    if (this.estudiante.nombre==""||this.estudiante.apellido==""||this.estudiante.asignatura==""||this.estudiante.carrera==""||this.estudiante.periodoAcademico=="") {
      
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Datos Vacios',
      })
    } 
    /*
  else {
    this.docenteWS.registrarDocente(this.docente).subscribe(data=>{
      console.log(data)

    })
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Docente creado exitosamente',
        showConfirmButton: false,
        timer: 1500
      })
      this.docente.nombre=''
      this.docente.apellido=''
      this.docente.asignatura=''
      this.docente.correo=''
    } 
    */
    this.estudianteWS.registrarEstudiante(this.estudiante).subscribe(data=>{
      console.log(data)
    })
  }

}
