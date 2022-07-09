import { Component, OnInit } from '@angular/core';
import { DocenteWS } from 'src/app/domain/docentews';
import { MateriaWS } from 'src/app/domain/materiaws';
import { DocenteswsService } from '../services/docentesws.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registrar-docente',
  templateUrl: './registrar-docente.page.html',
  styleUrls: ['./registrar-docente.page.scss'],
})
export class RegistrarDocentePage implements OnInit {

  docente:DocenteWS = new DocenteWS();
  materia:MateriaWS = new MateriaWS();
  materias:any;

  constructor(private docenteWS: DocenteswsService) { }

  ngOnInit(): void {
    this.cargarMaterias()
  }

  guardarD(){

    if (this.docente.nombre==""||this.docente.apellido==""||this.docente.correo=="") {
      
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Datos Vacios',
      })
    } 
    
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

      this.docente.correo=''
    } 
    
  }

  cargarMaterias(): void{
    this.materias = this.docenteWS.getMaterias();
    console.log("Hola");
    console.log("Hola2"+this.docenteWS.getMaterias());
  }
}
