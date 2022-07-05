import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateDocentePageRoutingModule } from './update-docente-routing.module';

import { UpdateDocentePage } from './update-docente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateDocentePageRoutingModule
  ],
  declarations: [UpdateDocentePage]
})
export class UpdateDocentePageModule {}
