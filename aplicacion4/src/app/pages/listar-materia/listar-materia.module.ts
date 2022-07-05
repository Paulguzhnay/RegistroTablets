import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarMateriaPageRoutingModule } from './listar-materia-routing.module';

import { ListarMateriaPage } from './listar-materia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarMateriaPageRoutingModule
  ],
  declarations: [ListarMateriaPage]
})
export class ListarMateriaPageModule {}
