import { Component, OnInit } from '@angular/core';
import { MateriaWS } from 'src/app/domain/materiaws';
import { MateriawsService } from '../services/materiaws.service';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { DocenteWS } from 'src/app/domain/docentews';
import { DocenteswsService } from '../services/docentesws.service';

@Component({
  selector: 'app-ingresar-materia',
  templateUrl: './ingresar-materia.component.html',
  styleUrls: ['./ingresar-materia.component.css']
})
export class IngresarMateriaComponent implements OnInit {
  materia:MateriaWS = new MateriaWS();
  materias: any;

  docentes: any;

  constructor(private materiaWS: MateriawsService,@Inject(DOCUMENT) private _document: Document) { }

  ngOnInit(): void {
  this.docentes = this.materiaWS.getDocentes();
  this.cargarDocentes();
  }

  guardarM(){

    this.materiaWS.registrarMateria(this.materia).subscribe(data=>{
      console.log(data)
    })
  }

  cargarMateria(): void{
    this.materias = this.materiaWS.getMateria();
  }

  cargarDocentes(): void{
    this.docentes = this.materiaWS.getDocentes();
    console.log("Hola");
    console.log("Hola2"+this.materiaWS.getDocentes());
  }



}
