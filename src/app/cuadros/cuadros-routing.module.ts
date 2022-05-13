import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
import { CuadrosDetailPage } from './cuadros-detail/cuadros-detail.page';
import { CuadrosEditPage } from './cuadros-edit/cuadros-edit.page';
import { CuadrosNewPage } from './cuadros-new/cuadros-new.page';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./cuadros-new/cuadro-new.module').then(
        (m) => m.CuadroNewPageModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./cuadros-detail/cuadro-detail.module').then(
        (m) => m.CuadroDetailPageModule
      ),
  },
  { path: '', component: CuadrosEditPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuadrosRoutingModule {}
