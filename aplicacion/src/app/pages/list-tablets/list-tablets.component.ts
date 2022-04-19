import { Component, Input, OnInit } from '@angular/core';
import { Tablet } from 'src/app/domain/tablets';
import { ListTabletwsService } from '../services/list-tabletws.service';

@Component({
  selector: 'app-list-tablets',
  templateUrl: './list-tablets.component.html',
  styleUrls: ['./list-tablets.component.css']
})
export class ListTabletsComponent implements OnInit {

  TabletGrupo:Tablet=new Tablet;

  constructor(private TabletService: ListTabletwsService) { }

  @Input() dep:any;
  
  ngOnInit(): void {

    console.log("ngOnInit")
    this.cargarTablets();
  }

  tablets:any

  cargarTablets(){
    this.tablets=this.TabletService.getTablet();
  }

}
