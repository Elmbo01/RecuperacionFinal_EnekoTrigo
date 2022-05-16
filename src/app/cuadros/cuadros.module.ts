import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuadrosRoutingModule } from './cuadros-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CuadroNewComponent } from './cuadro-new/cuadro-new.component';
import { CuadroEditComponent } from './cuadro-edit/cuadro-edit.component';
import { CuadroDetailComponent } from './cuadro-detail/cuadro-detail.component';
import { CuadroItemComponent } from './cuadro-item/cuadro-item.component';

@NgModule({
  declarations: [
    CuadroNewComponent,
    CuadroItemComponent,
    CuadroEditComponent,
    CuadroDetailComponent,
  ],
  imports: [CommonModule, CuadrosRoutingModule, SharedModule],
  exports: [CuadroItemComponent],
})
export class CuadrosModule {}
