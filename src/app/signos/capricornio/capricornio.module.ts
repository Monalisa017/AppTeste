import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CapricornioPageRoutingModule } from './capricornio-routing.module';

import { CapricornioPage } from './capricornio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CapricornioPageRoutingModule
  ],
  declarations: [CapricornioPage]
})
export class CapricornioPageModule {}
