import { Component } from '@angular/core';
import { CuadroService } from './core/cuadro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  id: any;
  title = 'KekiñoArtGalery';
  constructor(private cuadroService: CuadroService, private router: Router) {}
  
  ngOnInit() {
      this.router.navigate(['/']);
  }

  newCuadro() {
    this.cuadroService.getMaxCuadroId().subscribe((data) => (this.id = data));
    this.router.navigate(['/cuadros', this.id, 'new']);
  }

}




