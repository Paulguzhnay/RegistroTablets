import { Component, OnInit } from '@angular/core';
import { DocenteWS } from 'src/app/domain/docentews';
import { DocenteswsService } from '../services/docentesws.service';

@Component({
  selector: 'app-registrar-docente',
  templateUrl: './registrar-docente.component.html',
  styleUrls: ['./registrar-docente.component.css']
})
export class RegistrarDocenteComponent implements OnInit {

  docente:DocenteWS = new DocenteWS();

  constructor(private docenteWS: DocenteswsService) { }

  ngOnInit(): void {
  }

  guardarD(){

    this.docenteWS.registrarDocente(this.docente).subscribe(data=>{
      console.log(data)
    })
  }
}
