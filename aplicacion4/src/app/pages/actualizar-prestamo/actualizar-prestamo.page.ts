import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { RTablet } from 'src/app/domain/RegTablet';
import { DocenteWS } from 'src/app/domain/docentews';
import { MateriaWS } from 'src/app/domain/materiaws';
import { DocenteswsService } from '../services/docentesws.service';
import { MateriawsService } from '../services/materiaws.service';
import {  ListTabletwsService } from '../services/list-tabletws.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import jsQR from 'jsqr';
import { EstudianteWS } from 'src/app/domain/estudiantews';

@Component({
  selector: 'app-actualizar-prestamo',
  templateUrl: './actualizar-prestamo.page.html',
  styleUrls: ['./actualizar-prestamo.page.scss'],
})
export class ActualizarPrestamoPage implements OnInit {

  constructor(private toasstCtrl: ToastController, private loadingCtrl: LoadingController,
    private tabletWS: ListTabletwsService,private docenteWS: DocenteswsService,
    private materiaWS: MateriawsService,
    private _route: ActivatedRoute) {}

  tablet: RTablet = new RTablet();
  tabletPrest: RTablet = new RTablet();
  docente:DocenteWS = new DocenteWS();
  materia:MateriaWS = new MateriaWS();
  estudiante:EstudianteWS = new EstudianteWS();
  materias:any;
  docentes: any;
  estTablet:any;
  estudiantes:any;
  tabletsP:any;
  id: string="";
  id1: number=0;
  cargarMaterias(): void{
    this.materias = this.docenteWS.getMaterias();
  }
  ngOnInit() {
    let idF = this._route.snapshot.paramMap.get('id');

    this.id = `${idF}`;
    this.id1==Number(this.id);
    this.tablet.id=Number(this.id)
    this.buscarEstTablet();
    this.cargarMaterias();
    this.cargarDocentes();
    this.cargarTabletsP();
    this.cargarDatosTablet();

  }

  buscarEstTablet(){

    this.tabletWS.listTabletPrestamo(this.tablet.id).subscribe(data=>{

        this.tabletPrest = data;
        this.tablet = this.tabletPrest
    });
  }

  cargarDatosTablet(){
    this.tabletWS.listTabletPrestamo(this.tablet.id).subscribe(data=>{
      this.tabletPrest = data;

  })
  }

  guardarDatos(): void{
    this.tabletWS.actualizarTabletR(this.tablet).subscribe(data=>{
      
    })
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Tablet Actualizado',
      heightAuto: false,
      timer:8500
    })

    window.location.href="/devolver-prestamo"
  }
  cargarDocentes(): void{
    this.docentes = this.materiaWS.getDocentes();
  }
  cargarTabletsP():void{
    this.tabletsP=this.tabletWS.getTabletPrestamo();
  }

}
