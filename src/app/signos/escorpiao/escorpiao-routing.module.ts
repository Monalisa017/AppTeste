import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscorpiaoPage } from './escorpiao.page';

const routes: Routes = [
  {
    path: '',
    component: EscorpiaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscorpiaoPageRoutingModule {}
