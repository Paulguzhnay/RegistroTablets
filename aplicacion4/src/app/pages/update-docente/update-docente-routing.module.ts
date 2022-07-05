import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateDocentePage } from './update-docente.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateDocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateDocentePageRoutingModule {}
