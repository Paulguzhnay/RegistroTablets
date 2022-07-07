import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarDocentesPage } from './listar-docentes.page';

const routes: Routes = [
  {
    path: '',
    component: ListarDocentesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarDocentesPageRoutingModule {}
