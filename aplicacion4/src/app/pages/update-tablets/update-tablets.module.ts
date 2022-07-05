import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateTabletsPageRoutingModule } from './update-tablets-routing.module';

import { UpdateTabletsPage } from './update-tablets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateTabletsPageRoutingModule
  ],
  declarations: [UpdateTabletsPage]
})
export class UpdateTabletsPageModule {}
