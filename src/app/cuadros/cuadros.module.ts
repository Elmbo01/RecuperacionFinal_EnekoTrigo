import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

<<<<<<< HEAD
import { IonicModule } from '@ionic/angular';

import { CuadrosRoutingModule } from './cuadros-routing.module';
import { CuadrosEditPage } from './cuadros-edit/cuadros-edit.page';
import { CuadrosNewPage } from './cuadros-new/cuadros-new.page';
import { CuadrosDetailPage } from './cuadros-detail/cuadros-detail.page';
import { CuadrosItemPage } from './cuadros-item/cuadros-item.page';
import { SharedModule } from '../shared/shared.mpodule';
import { CoreModule } from '../core/core.module';
import {CuadroDetailPageModule } from './cuadros-detail/cuadro-detail.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuadrosRoutingModule,
    SharedModule, 
    CoreModule,
    CuadroDetailPageModule,

    
  ],
  declarations: [CuadrosEditPage, CuadrosNewPage, CuadrosDetailPage, CuadrosItemPage]
=======
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
>>>>>>> dev
})
export class CuadrosModule {}
