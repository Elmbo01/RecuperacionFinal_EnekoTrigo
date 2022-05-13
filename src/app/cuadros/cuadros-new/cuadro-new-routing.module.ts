import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuadrosNewPage } from './cuadros-new.page';

const routes: Routes = [
  {
    path: '',
    component: CuadrosNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuadrosNewPageRoutingModule {}
