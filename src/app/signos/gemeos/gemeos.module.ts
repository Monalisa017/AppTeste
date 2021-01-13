import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GemeosPageRoutingModule } from './gemeos-routing.module';

import { GemeosPage } from './gemeos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GemeosPageRoutingModule
  ],
  declarations: [GemeosPage]
})
export class GemeosPageModule {}
