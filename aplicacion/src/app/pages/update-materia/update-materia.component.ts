import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MateriaWS } from 'src/app/domain/materiaws';
import { MateriawsService } from '../services/materiaws.service';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-materia',
  templateUrl: './update-materia.component.html',
  styleUrls: ['./update-materia.component.css']
})
export class UpdateMateriaComponent implements OnInit {
  materia: MateriaWS = new MateriaWS();
  materia2: MateriaWS = new MateriaWS();
  
  materias: any;



  constructor(private http: HttpClient,private materiaService: MateriawsService, private _route: ActivatedRoute) { }
  
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
    })
  
  //window.location.href="Listar-Materia.html"

  }

}
