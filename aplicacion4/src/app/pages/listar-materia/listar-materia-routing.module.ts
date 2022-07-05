import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarMateriaPage } from './listar-materia.page';

const routes: Routes = [
  {
    path: '',
    component: ListarMateriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarMateriaPageRoutingModule {}
