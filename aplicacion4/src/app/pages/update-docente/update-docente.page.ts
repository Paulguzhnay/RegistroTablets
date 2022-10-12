import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { DocenteWS } from 'src/app/domain/docentews';
import { DocenteswsService } from '../services/docentesws.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { MateriaWS } from 'src/app/domain/materiaws';

@Component({
  selector: 'app-update-docente',
  templateUrl: './update-docente.page.html',
  styleUrls: ['./update-docente.page.scss'],
})
export class UpdateDocentePage implements OnInit {

  docente: DocenteWS = new DocenteWS();
  docente1: DocenteWS = new DocenteWS();
  docentes: any;
  materia:MateriaWS = new MateriaWS();
  materias:any;

  constructor(private _route: ActivatedRoute,private docenteWS: DocenteswsService) { }

  id: string="";
  id1: number=0;

  ngOnInit(): void {
    let id = this._route.snapshot.paramMap.get('id');

    this.id = `${id}`
    this.id1= Number(this.id)
    this.docente.id= Number(this.id)
    this.cargarDocente();
    this.cargarMaterias();
  }

  cargarDocente(){
    this.docenteWS.buscarDocente(this.docente.id).subscribe(docentes=>{
      this.docente1 = docentes
      this.docente = this.docente1
    })
  }
  guardarDatos(): void{
    this.docenteWS.update(this.docente).subscribe(data=>{

    })
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Docente Actualizado',
      showConfirmButton: false,
      heightAuto: false,
      timer:9500
    })

    window.location.href="/listar-docentes"
  }

  cargarMaterias(): void{
    this.materias = this.docenteWS.getMaterias();

  }


}

