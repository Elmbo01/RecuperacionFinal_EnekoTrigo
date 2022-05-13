import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'cuadros/:id/new',
    loadChildren: () =>
      import('./cuadros/cuadros-new/cuadro-new.module').then(
        (m) => m.CuadroNewPageModule
      ),
  },
  {
    path: 'cuadros/:id/edit',
    loadChildren: () =>
      import('./cuadros/cuadros-edit/cuadro-edit.module').then(
        (m) => m.CuadroEditPageModule
      ),
  },
  {
    path: 'cuadros/:cuadroId',
    loadChildren: () =>
      import('./cuadros/cuadros-detail/cuadro-detail.module').then(
        (m) => m.CuadroDetailPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
