import { NgModule } from '@angular/core';
<<<<<<< HEAD
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
=======
import { RouterModule, Routes } from '@angular/router';
import { CuadroDetailComponent } from './cuadro-detail/cuadro-detail.component';
import { CuadroEditComponent } from './cuadro-edit/cuadro-edit.component';
import { CuadroNewComponent } from './cuadro-new/cuadro-new.component';

const routes: Routes = [
  { path: 'cuadros/:id/new', component: CuadroNewComponent },
  { path: 'cuadros/:cuadroId', component: CuadroDetailComponent },
  { path: 'cuadros/:id/edit', component: CuadroEditComponent },
>>>>>>> dev
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuadrosRoutingModule {}
