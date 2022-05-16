import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuadroDetailComponent } from './cuadro-detail/cuadro-detail.component';
import { CuadroEditComponent } from './cuadro-edit/cuadro-edit.component';
import { CuadroNewComponent } from './cuadro-new/cuadro-new.component';

const routes: Routes = [
  { path: 'cuadros/:id/new', component: CuadroNewComponent },
  { path: 'cuadros/:cuadroId', component: CuadroDetailComponent },
  { path: 'cuadros/:id/edit', component: CuadroEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuadrosRoutingModule {}
