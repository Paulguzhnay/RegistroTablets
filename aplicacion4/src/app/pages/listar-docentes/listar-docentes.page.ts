import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { DocenteWS } from 'src/app/domain/docentews';
import { MateriaWS } from 'src/app/domain/materiaws';
import { DocenteswsService } from '../services/docentesws.service';
import { MateriawsService } from '../services/materiaws.service';

@Component({
  selector: 'app-listar-docentes',
  templateUrl: './listar-docentes.page.html',
  styleUrls: ['./listar-docentes.page.scss'],
})
export class ListarDocentesPage implements OnInit {

  docente: DocenteWS = new DocenteWS;
  docenteUpdate: DocenteWS = new DocenteWS();
  materiaUpdate: MateriaWS = new MateriaWS();
  docentes: any;
  docentes2:any;
  materiasU: any;

  constructor(private docenteService: DocenteswsService, @Inject(DOCUMENT) private _document: Document, private materiaService: MateriawsService) { }

  ngOnInit(): void {
    this.cargarDocentes();

  }
  cargarDocentes(){
    this.docentes = this.docenteService.getDocentes();
  }

  eliminar(id:number){
    if (window.confirm('¿Estás seguro de eliminar docente?')) {
      this.materiaService.buscarMateriaDocente(id).subscribe(data=>{
        this.materiasU = data;
        let dimension = this.materiasU.length
        console.log(dimension)
        console.log(this.materiasU)
        console.log(this.materiasU[0].id)
        let i = 0;
        let datosU: MateriaWS = new MateriaWS(); 
        while(i < dimension){
                
          datosU.docente = null;

          datosU.id = this.materiasU[i].id;

          datosU.nombre = this.materiasU[i].nombre;

          
          this.materiaService.update(datosU);
          i+=1;
        }
        
        /*this.docentes2.docente = null;
        this.materiaUpdate = this.docentes2.get
        console.log("ACTUALIZADO")
        console.log(this.materiaUpdate);
        this.materiaService.update(this.materiaUpdate)*/
        
      });
  


      //this.docenteService.eliminar(id).subscribe();
      //window.location.reload();
    }
  }

}
