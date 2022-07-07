import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarDocentesPageRoutingModule } from './listar-docentes-routing.module';

import { ListarDocentesPage } from './listar-docentes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarDocentesPageRoutingModule
  ],
  declarations: [ListarDocentesPage]
})
export class ListarDocentesPageModule {}
