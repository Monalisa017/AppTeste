import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AquarioPageRoutingModule } from './aquario-routing.module';

import { AquarioPage } from './aquario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AquarioPageRoutingModule
  ],
  declarations: [AquarioPage]
})
export class AquarioPageModule {}
