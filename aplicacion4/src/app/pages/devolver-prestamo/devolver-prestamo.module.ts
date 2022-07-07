import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevolverPrestamoPageRoutingModule } from './devolver-prestamo-routing.module';

import { DevolverPrestamoPage } from './devolver-prestamo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevolverPrestamoPageRoutingModule
  ],
  declarations: [DevolverPrestamoPage]
})
export class DevolverPrestamoPageModule {}
