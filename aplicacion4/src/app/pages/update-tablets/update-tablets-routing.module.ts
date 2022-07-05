import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateTabletsPage } from './update-tablets.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateTabletsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateTabletsPageRoutingModule {}
