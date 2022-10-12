import { Component, OnInit } from '@angular/core';
import { MateriaWS } from 'src/app/domain/materiaws';
import { MateriawsService } from '../services/materiaws.service';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import {RouterModule} from '@angular/router';
@Component({
  selector: 'app-listar-materia',
  templateUrl: './listar-materia.page.html',
  styleUrls: ['./listar-materia.page.scss'],
})
export class ListarMateriaPage implements OnInit {
  materia: MateriaWS = new MateriaWS();
  materias: any;
  constructor(private materiaService: MateriawsService, @Inject(DOCUMENT) private _document: Document) { }

  ngOnInit(): void {
    this.cargarMateria();

  }
  guardarDatos(){
    this.materiaService.update(this.materia).subscribe(data => {

    });

    this.cargarMateria;
    this._document.defaultView?.location.reload();
  }
  cargarMateria(){
    this.materias = this.materiaService.getMateria();
  }

  borrarMateria(id:number){
    if (window.confirm('¿Estas seguro de querer borrar esta tablet?')) {
      this.materiaService.borrarMateria(id).subscribe();
      window.location.reload();

    }

}
}
