import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizarPrestamoPageRoutingModule } from './actualizar-prestamo-routing.module';

import { ActualizarPrestamoPage } from './actualizar-prestamo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizarPrestamoPageRoutingModule
  ],
  declarations: [ActualizarPrestamoPage]
})
export class ActualizarPrestamoPageModule {}
