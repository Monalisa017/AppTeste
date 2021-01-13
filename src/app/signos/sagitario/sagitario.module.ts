import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SagitarioPageRoutingModule } from './sagitario-routing.module';

import { SagitarioPage } from './sagitario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SagitarioPageRoutingModule
  ],
  declarations: [SagitarioPage]
})
export class SagitarioPageModule {}
