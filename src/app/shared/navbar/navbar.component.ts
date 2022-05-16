import { Component, OnInit } from '@angular/core';
import { CuadroService } from '../../core/cuadro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  id: any;

  constructor(private cuadroService: CuadroService, private router: Router) {}

  ngOnInit() {}

  newCuadro() {
    // Get max product Id from the product list
    this.cuadroService.getMaxCuadroId().subscribe((data) => (this.id = data));
    this.router.navigate(['/cuadros', this.id, 'new']);
  }
}
