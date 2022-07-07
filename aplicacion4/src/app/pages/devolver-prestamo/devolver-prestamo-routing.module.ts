import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevolverPrestamoPage } from './devolver-prestamo.page';

const routes: Routes = [
  {
    path: '',
    component: DevolverPrestamoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevolverPrestamoPageRoutingModule {}
