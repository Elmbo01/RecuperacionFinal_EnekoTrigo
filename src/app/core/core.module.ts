import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuadroService } from './cuadro.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [CuadroService],
})
export class CoreModule {}

