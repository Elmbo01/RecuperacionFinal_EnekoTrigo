import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CuadrosEditPageRoutingModule } from './cuadro-edit-routing.module';
import { CuadrosEditPage } from './cuadros-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuadrosEditPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [CuadrosEditPage],
})
export class CuadroEditPageModule {}
