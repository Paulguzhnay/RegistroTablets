import { Component,Input, OnInit } from '@angular/core';
import { Tablet } from 'src/app/domain/tablets';
import { ListTabletwsService } from '../services/list-tabletws.service';

@Component({
  selector: 'app-list-tablets',
  templateUrl: './list-tablets.page.html',
  styleUrls: ['./list-tablets.page.scss'],
})
export class ListTabletsPage implements OnInit {
  TabletGrupo:Tablet=new Tablet;
  constructor(private TabletService: ListTabletwsService) { }

  @Input() dep:any;

  ngOnInit(): void {

    
    this.cargarTablets();
  }

  tablets:any
  cargarTablets(){
    this.tablets=this.TabletService.getTablet();
  }

  borrarTablet(id:number){
    if (window.confirm('¿Estas seguro de querer borrar esta tablet?')) {
      this.TabletService.borrarTablet(id).subscribe();
      window.location.reload();

    }



  }

}
