import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListTabletsPage } from './list-tablets.page';

const routes: Routes = [
  {
    path: '',
    component: ListTabletsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListTabletsPageRoutingModule {}
