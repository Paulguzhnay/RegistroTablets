import { Component, OnInit } from '@angular/core';
import { MateriaWS } from 'src/app/domain/materiaws';
import { MateriawsService } from '../services/materiaws.service';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-materia',
  templateUrl: './update-materia.page.html',
  styleUrls: ['./update-materia.page.scss'],
})
export class UpdateMateriaPage implements OnInit {
  materia: MateriaWS = new MateriaWS();
  materia2: MateriaWS = new MateriaWS();
  
  materias: any;



  constructor(private materiaService: MateriawsService, private _route: ActivatedRoute) { }
  
  id: string="";
  id1: number=0;
  docentes: any;

  ngOnInit(): void {
    
    this.cargarDocentes()
    let id = this._route.snapshot.paramMap.get('id');
    console.log(id)
    this.id = `${id}`
    this.id1==Number(this.id)
    this.materia.id=Number(this.id)
    this.cargarMateria();
  }

  cargarMateria(){

      this.materiaService.buscarMateria(this.materia.id).subscribe(data=>{
        this.materia2 = data;
        console.log("3"+this.materia2.nombre+"4")
        this.materia.nombre=this.materia2.nombre
       
    })
  }


  cargarDocentes(): void{
    this.docentes = this.materiaService.getDocentes();
    console.log("Hola");
    console.log("Hola2"+this.materiaService.getDocentes());
  }


  actualizarInformacion(materia2: MateriaWS): void{
    this.materia = materia2;

  }

  guardarMateria(){
    this.materiaService.update(this.materia).subscribe(data=>{
      console.log(data)
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'La materia ha sido actualizada exitosamente',
        showConfirmButton: false,
        heightAuto: false,
        timer: 8500
  
      });
    })

  
  //window.location.href="Listar-Materia.html"

  }

}

