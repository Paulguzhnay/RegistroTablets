import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresarMateriaPage } from './ingresar-materia.page';

const routes: Routes = [
  {
    path: '',
    component: IngresarMateriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresarMateriaPageRoutingModule {}
