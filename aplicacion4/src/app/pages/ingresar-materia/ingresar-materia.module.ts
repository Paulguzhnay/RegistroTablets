import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresarMateriaPageRoutingModule } from './ingresar-materia-routing.module';

import { IngresarMateriaPage } from './ingresar-materia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresarMateriaPageRoutingModule
  ],
  declarations: [IngresarMateriaPage]
})
export class IngresarMateriaPageModule {}
