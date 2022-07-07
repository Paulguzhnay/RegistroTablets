import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { DocenteWS } from 'src/app/domain/docentews';
import { DocenteswsService } from '../services/docentesws.service';

@Component({
  selector: 'app-listar-docentes',
  templateUrl: './listar-docentes.page.html',
  styleUrls: ['./listar-docentes.page.scss'],
})
export class ListarDocentesPage implements OnInit {

  docente: DocenteWS = new DocenteWS;
  docentes: any;
  constructor(private docenteService: DocenteswsService, @Inject(DOCUMENT) private _document: Document) { }

  ngOnInit(): void {
    this.cargarDocentes();

  }
  cargarDocentes(){
    this.docentes = this.docenteService.getDocentes();
  }

  eliminar(id: Number){
    if (window.confirm('¿Estás seguro de eliminar docente?')) {
      console.log(id)
      this.docenteService.eliminar(id).subscribe();
      window.location.reload();
    }
  }

}
