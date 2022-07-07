import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { RTablet } from 'src/app/domain/RegTablet';
import { DocenteWS } from 'src/app/domain/docentews';
import { MateriaWS } from 'src/app/domain/materiaws';
import { DocenteswsService } from '../services/docentesws.service';
import { MateriawsService } from '../services/materiaws.service';
import {  ListTabletwsService } from '../services/list-tabletws.service';
import Swal from 'sweetalert2';
import jsQR from 'jsqr';
import { EstudianteWS } from 'src/app/domain/estudiantews';

@Component({
  selector: 'app-devolver-prestamo',
  templateUrl: './devolver-prestamo.page.html',
  styleUrls: ['./devolver-prestamo.page.scss'],
})
export class DevolverPrestamoPage implements OnInit {

  constructor(private toasstCtrl: ToastController, private loadingCtrl: LoadingController,private tabletWS: ListTabletwsService,private docenteWS: DocenteswsService,private materiaWS: MateriawsService) {} 
  tablet: RTablet = new RTablet();
  docente:DocenteWS = new DocenteWS();
  materia:MateriaWS = new MateriaWS();
  estudiante:EstudianteWS = new EstudianteWS();
  materias:any;
  docentes: any;
  estTablet:any;
  estudiantes:any;
  cargarMaterias(): void{
    this.materias = this.docenteWS.getMaterias();
  }
  ngOnInit() {
    this.cargarMaterias();
    this.cargarDocentes();
  }

  buscarEstTablet(){
    this.tabletWS.buscarEst(this.tablet.materia.id).subscribe(data=>{
        this.estudiantes = data;
        console.log(this.estudiantes);
    });

  }
  guardarDatos(): void{
    this.tabletWS.actualizarTabletR(this.tablet).subscribe(data=>{
      console.log("----------------------------------")
      console.log(data)
    })
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Docente Actualizado',
      
      timer:8500
    })

    window.location.href="/listar-docentes"
  }
  cargarDocentes(): void{
    this.docentes = this.materiaWS.getDocentes();
  }

}
