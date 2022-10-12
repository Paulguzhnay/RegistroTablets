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
        position: 'center',
        icon: 'error',
        title: 'Oops...',
        text: 'Datos Vacios',
        heightAuto: false,
        timer:8500
      })
    }else{
    this.docenteWS.verificarDocente(this.docente.nombre,this.docente.apellido).subscribe(dataD=>{
      if(dataD==true){
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Error de Registro',
          text: 'El Docente ya se encuentra registrado',
          heightAuto: false,
          timer:8500
        })
      } else{
      this.docenteWS.registrarDocente(this.docente).subscribe(data=>{

        Swal.fire({
          position:'center',
          icon:'success',
          title:'Docente creado con exito',
          heightAuto: false,
          timer:1500
        })
      })
    }
    })  
    }
  }

  cargarMaterias(): void{
    this.materias = this.docenteWS.getMaterias();
 
  }
}
