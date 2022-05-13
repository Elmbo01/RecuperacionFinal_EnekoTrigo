import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CuadroService } from 'src/app/core/cuadro.service';
import { Cuadro } from 'src/app/shared/cuadro';

@Component({
  selector: 'app-cuadros-detail',
  templateUrl: './cuadros-detail.page.html',
  styleUrls: ['./cuadros-detail.page.scss'],
})
export class CuadrosDetailPage implements OnInit {
  cuadro: Cuadro = {
    id: 0,
    nombre: '',
    imagen: '',
    autor: '',
    fecha: new Date(),
  };
  cuadId: number = 0; 
  
  constructor(
    private activatedroute: ActivatedRoute,
    private router: Router,
    private cuadroService: CuadroService) { }

  ngOnInit() {
    this.cuadId = parseInt(this.activatedroute.snapshot.params['productId']);
    this.cuadroService
      .getCuadroById(this.cuadId)
      .subscribe((data: Cuadro) => (this.cuadro = data[0]));
  }
  goEdit(): void {
    this.router.navigate(['/cuadros', this.cuadId, 'edit']);
  }
  onBack(): void {
    this.router.navigate(['']);
  }

}
