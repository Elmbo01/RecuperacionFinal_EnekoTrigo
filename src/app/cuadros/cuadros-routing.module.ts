import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuadrosPage } from './cuadros.page';

const routes: Routes = [
  {
    path: '',
    component: CuadrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuadrosPageRoutingModule {}
