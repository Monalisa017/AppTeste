import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LibraPageRoutingModule } from './libra-routing.module';

import { LibraPage } from './libra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LibraPageRoutingModule
  ],
  declarations: [LibraPage]
})
export class LibraPageModule {}
