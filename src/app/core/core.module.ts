import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuadroService } from './cuadro.service';
import { HttpClientModule } from '@angular/common/http';

// Import for loading & configuring in-memory web api
// https://627a7de773bad506858a243f.mockapi.io/Cuadro

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [CuadroService],
})
export class CoreModule {}
