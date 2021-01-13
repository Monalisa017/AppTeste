import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AquarioPage } from './aquario.page';

const routes: Routes = [
  {
    path: '',
    component: AquarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AquarioPageRoutingModule {}
