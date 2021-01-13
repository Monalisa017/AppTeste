import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscorpiaoPageRoutingModule } from './escorpiao-routing.module';

import { EscorpiaoPage } from './escorpiao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscorpiaoPageRoutingModule
  ],
  declarations: [EscorpiaoPage]
})
export class EscorpiaoPageModule {}
