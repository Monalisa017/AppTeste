import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CapricornioPage } from './capricornio.page';

const routes: Routes = [
  {
    path: '',
    component: CapricornioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapricornioPageRoutingModule {}
