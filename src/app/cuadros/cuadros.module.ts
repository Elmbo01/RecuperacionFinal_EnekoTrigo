import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
})
export class CuadrosPageModule {}
