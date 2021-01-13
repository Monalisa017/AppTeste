import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AriesPageRoutingModule } from './aries-routing.module';

import { AriesPage } from './aries.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AriesPageRoutingModule
  ],
  declarations: [AriesPage]
})
export class AriesPageModule {}
