import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VirgemPage } from './virgem.page';

const routes: Routes = [
  {
    path: '',
    component: VirgemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VirgemPageRoutingModule {}
