import { Component, OnInit } from '@angular/core';
import { Cuadro } from '../shared/cuadro';
import { CuadroService } from '../core/cuadro.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  cuadros: Cuadro[] = [];
  constructor(private cuadroService: CuadroService) {}

  ngOnInit() {
    this.cuadroService
      .getCuadros()
      .subscribe((data: Cuadro[]) => (this.cuadros = data));
      
  }
}
