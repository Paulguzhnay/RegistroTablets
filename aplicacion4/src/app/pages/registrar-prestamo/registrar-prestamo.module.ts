import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarPrestamoPageRoutingModule } from './registrar-prestamo-routing.module';

import { RegistrarPrestamoPage } from './registrar-prestamo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarPrestamoPageRoutingModule
  ],
  declarations: [RegistrarPrestamoPage]
})
export class RegistrarPrestamoPageModule {}
