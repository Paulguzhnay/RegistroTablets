import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsertTabletsPage } from './insert-tablets.page';

const routes: Routes = [
  {
    path: '',
    component: InsertTabletsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsertTabletsPageRoutingModule {}
