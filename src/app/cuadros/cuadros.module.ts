import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuadrosPageRoutingModule } from './cuadros-routing.module';

import { CuadrosPage } from './cuadros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuadrosPageRoutingModule
  ],
  declarations: [CuadrosPage]
})
export class CuadrosPageModule {}
