import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CancerPageRoutingModule } from './cancer-routing.module';

import { CancerPage } from './cancer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CancerPageRoutingModule
  ],
  declarations: [CancerPage]
})
export class CancerPageModule {}
