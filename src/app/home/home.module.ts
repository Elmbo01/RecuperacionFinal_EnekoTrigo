import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

import { FooterComponent } from '../shared/footer/footer.component';
import { SharedModule } from '../shared/shared.mpodule';
import { CuadrosPageModule } from '../cuadros/cuadros.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    CuadrosPageModule,
    SharedModule,
    CoreModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}


