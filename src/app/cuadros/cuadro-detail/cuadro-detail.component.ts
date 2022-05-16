import { Component, OnInit } from '@angular/core';
import { CuadroService } from '../../core/cuadro.service';
import { Cuadro } from '../../shared/cuadro';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cuadro-detail',
  templateUrl: './cuadro-detail.component.html',
  styleUrls: ['./cuadro-detail.component.css'],
})
export class CuadroDetailComponent implements OnInit {
  cuadro: Cuadro = {
    id: 0,
    nombre: '',
    autor: '',
    fecha: new Date,
    imagen: '',
  };
  sngId: number = 0;

  constructor(
    private activatedroute: ActivatedRoute,
    private router: Router,
    private cuadroService: CuadroService
  ) {}

  ngOnInit() {
    this.sngId = parseInt(this.activatedroute.snapshot.params['cuadroId']);
    this.cuadroService
      .getCuadroById(this.sngId)
      .subscribe((data: Cuadro) => (this.cuadro = data));
  }
  goEdit(): void {
    this.router.navigate(['/cuadros', this.sngId, 'edit']);
  }
  onBack(): void {
    this.router.navigate(['']);
  }
}
