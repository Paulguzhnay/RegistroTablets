import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { registrarE } from 'src/app/domain/estudiante';
import { EstudianteWS } from 'src/app/domain/estudiantews';
import { EstudiantewsService } from '../services/estudiantews.service';

@Component({
  selector: 'app-registrar-estudiante',
  templateUrl: './registrar-estudiante.component.html',
  styleUrls: ['./registrar-estudiante.component.css']
})
export class RegistrarEstudianteComponent implements OnInit {
  estudiante: EstudianteWS = new EstudianteWS();



  constructor(private estudianteWS: EstudiantewsService) { }

  ngOnInit(): void {
  }

  guardar(){
    this.estudianteWS.registrarEstudiante(this.estudiante).subscribe(data=>{
      console.log(data)
    })
  }

}
