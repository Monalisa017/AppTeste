import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'aries',
    loadChildren: () => import('./signos/aries/aries.module').then( m => m.AriesPageModule)
  },
  {
    path: 'touro',
    loadChildren: () => import('./signos/touro/touro.module').then( m => m.TouroPageModule)
  },
  {
    path: 'gemeos',
    loadChildren: () => import('./signos/gemeos/gemeos.module').then( m => m.GemeosPageModule)
  },
  {
    path: 'cancer',
    loadChildren: () => import('./signos/cancer/cancer.module').then( m => m.CancerPageModule)
  },
  {
    path: 'leao',
    loadChildren: () => import('./signos/leao/leao.module').then( m => m.LeaoPageModule)
  },
  {
    path: 'virgem',
    loadChildren: () => import('./signos/virgem/virgem.module').then( m => m.VirgemPageModule)
  },
  {
    path: 'libra',
    loadChildren: () => import('./signos/libra/libra.module').then( m => m.LibraPageModule)
  },
  {
    path: 'escorpiao',
    loadChildren: () => import('./signos/escorpiao/escorpiao.module').then( m => m.EscorpiaoPageModule)
  },
  {
    path: 'sagitario',
    loadChildren: () => import('./signos/sagitario/sagitario.module').then( m => m.SagitarioPageModule)
  },
  {
    path: 'capricornio',
    loadChildren: () => import('./signos/capricornio/capricornio.module').then( m => m.CapricornioPageModule)
  },
  {
    path: 'aquario',
    loadChildren: () => import('./signos/aquario/aquario.module').then( m => m.AquarioPageModule)
  },
  {
    path: 'peixes',
    loadChildren: () => import('./signos/peixes/peixes.module').then( m => m.PeixesPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
