import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { CuadrosModule } from '../cuadros/cuadros.module';

import { HomePageRoutingModule } from './home-routing.module';

<<<<<<< HEAD
import { HomePage } from './home.page';

import { FooterComponent } from '../shared/footer/footer.component';
import { SharedModule } from '../shared/shared.mpodule';
import { CuadrosPageModule } from '../cuadros/cuadros.module';
import { CoreModule } from '../core/core.module';

=======
>>>>>>> dev
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
<<<<<<< HEAD
    CuadrosPageModule,
    SharedModule,
    CoreModule,
=======
    CuadrosModule,
>>>>>>> dev
  ],
  declarations: [HomePage],
})
export class HomePageModule {}


