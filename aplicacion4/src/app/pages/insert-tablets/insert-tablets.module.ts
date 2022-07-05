import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsertTabletsPageRoutingModule } from './insert-tablets-routing.module';

import { InsertTabletsPage } from './insert-tablets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsertTabletsPageRoutingModule
  ],
  declarations: [InsertTabletsPage]
})
export class InsertTabletsPageModule {}
