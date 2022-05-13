import { Component, Input, OnInit } from '@angular/core';
import { Cuadro } from 'src/app/shared/cuadro';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuadros-item',
  templateUrl: './cuadros-item.page.html',
  styleUrls: ['./cuadros-item.page.scss'],
})
export class CuadrosItemPage implements OnInit {
  constructor(private router: Router) {}
  @Input() cuadro: Cuadro = {
    id: 0,
    nombre: '',
    imagen: '',
    autor: '',
    fecha: new Date(),
  };
  ngOnInit(): void {}
}
