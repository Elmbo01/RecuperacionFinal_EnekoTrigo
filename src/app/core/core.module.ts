import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuadroService } from './cuadro.service';
import { HttpClientModule } from '@angular/common/http';

// Import for loading & configuring in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CuadroData } from './cuadro-data';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [CuadroService],
})
export class CoreModule {}
