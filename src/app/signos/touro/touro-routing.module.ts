import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TouroPage } from './touro.page';

const routes: Routes = [
  {
    path: '',
    component: TouroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TouroPageRoutingModule {}
