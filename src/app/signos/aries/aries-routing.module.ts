import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AriesPage } from './aries.page';

const routes: Routes = [
  {
    path: '',
    component: AriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AriesPageRoutingModule {}
