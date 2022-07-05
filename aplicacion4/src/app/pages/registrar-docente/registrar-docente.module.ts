import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarDocentePageRoutingModule } from './registrar-docente-routing.module';

import { RegistrarDocentePage } from './registrar-docente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarDocentePageRoutingModule
  ],
  declarations: [RegistrarDocentePage]
})
export class RegistrarDocentePageModule {}
