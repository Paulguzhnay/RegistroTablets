import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListTabletsPageRoutingModule } from './list-tablets-routing.module';

import { ListTabletsPage } from './list-tablets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListTabletsPageRoutingModule
  ],
  declarations: [ListTabletsPage]
})
export class ListTabletsPageModule {}
