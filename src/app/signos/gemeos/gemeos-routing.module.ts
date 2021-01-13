import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GemeosPage } from './gemeos.page';

const routes: Routes = [
  {
    path: '',
    component: GemeosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GemeosPageRoutingModule {}
