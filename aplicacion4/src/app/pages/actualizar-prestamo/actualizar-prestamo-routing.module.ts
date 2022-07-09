import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizarPrestamoPage } from './actualizar-prestamo.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizarPrestamoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizarPrestamoPageRoutingModule {}
