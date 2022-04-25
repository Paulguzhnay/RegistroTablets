import { Component, OnInit } from '@angular/core';
import { DocenteWS } from 'src/app/domain/docentews';
import { MateriaWS } from 'src/app/domain/materiaws';
import { DocenteswsService } from '../services/docentesws.service';

@Component({
  selector: 'app-registrar-docente',
  templateUrl: './registrar-docente.component.html',
  styleUrls: ['./registrar-docente.component.css']
})

export class RegistrarDocenteComponent implements OnInit {

  docente:DocenteWS = new DocenteWS();
  materia:MateriaWS = new MateriaWS();
  materias:any;

  constructor(private docenteWS: DocenteswsService) { }

  ngOnInit(): void {
    this.cargarMaterias()
  }

  guardarD(){

    this.docenteWS.registrarDocente(this.docente).subscribe(data=>{
      console.log(data)

    })
  }

  cargarMaterias(): void{
    this.materias = this.docenteWS.getMaterias();
    console.log("Hola");
    console.log("Hola2"+this.docenteWS.getMaterias());
  }
}
