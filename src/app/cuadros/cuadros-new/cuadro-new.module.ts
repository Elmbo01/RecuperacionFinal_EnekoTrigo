import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CuadrosNewPageRoutingModule } from './cuadro-new-routing.module';
import { CuadrosNewPage } from './cuadros-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuadrosNewPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CuadrosNewPage],
})
export class CuadroNewPageModule {}
