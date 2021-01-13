import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VirgemPageRoutingModule } from './virgem-routing.module';

import { VirgemPage } from './virgem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VirgemPageRoutingModule
  ],
  declarations: [VirgemPage]
})
export class VirgemPageModule {}
