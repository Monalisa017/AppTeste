import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TouroPageRoutingModule } from './touro-routing.module';

import { TouroPage } from './touro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TouroPageRoutingModule
  ],
  declarations: [TouroPage]
})
export class TouroPageModule {}
