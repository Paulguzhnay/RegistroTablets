import { Component, OnInit, Input } from '@angular/core';
import { ListTabletwsService } from '../services/list-tabletws.service';
import { Tablet } from 'src/app/domain/tablets';
import { empty } from 'rxjs';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-insert-tablets',
  templateUrl: './insert-tablets.component.html',
  styleUrls: ['./insert-tablets.component.css']
})
export class InsertTabletsComponent implements OnInit {

  TabletGrupo:Tablet=new Tablet;

  constructor(private TabletService: ListTabletwsService) { }

  ngOnInit(): void {
  }

  guardarD(){

    if (this.TabletGrupo.nombre==""||this.TabletGrupo.laboratorio==""||this.TabletGrupo.codigo=="") {
      
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    } else {
      this.TabletService.registrarTablet(this.TabletGrupo).subscribe(data=>{
        console.log(data)
      })
/*       window.alert("Se ha creado exitosamente")
 */   
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'La tablet ha sido creada exitosamente',
        showConfirmButton: false,
        timer: 1500
      })
      this.TabletGrupo.codigo=''
      this.TabletGrupo.laboratorio=''
      this.TabletGrupo.nombre=''
      
    }

    
  }

}
