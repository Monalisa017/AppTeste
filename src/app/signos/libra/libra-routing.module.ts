import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibraPage } from './libra.page';

const routes: Routes = [
  {
    path: '',
    component: LibraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibraPageRoutingModule {}
