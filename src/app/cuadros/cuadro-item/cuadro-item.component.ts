import { Component, Input } from '@angular/core';
import { Cuadro } from '../../shared/cuadro';

@Component({
  selector: 'app-cuadro-item',
  templateUrl: './cuadro-item.component.html',
  styleUrls: ['./cuadro-item.component.css'],
})
export class CuadroItemComponent {
  @Input() cuadro: Cuadro = {
    id: 0,
    nombre: '',
    autor: '',
    fecha: new Date,
    imagen: '',
    
  };
}
