import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuadroDetailPageRoutingModule } from './cuadro-detail-routing.module';

import { CuadrosDetailPage } from './cuadros-detail.page';
import { CuadroService } from 'src/app/core/cuadro.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuadroDetailPageRoutingModule,
  ],
  declarations: [CuadrosDetailPage],
})
export class CuadroDetailPageModule {}
