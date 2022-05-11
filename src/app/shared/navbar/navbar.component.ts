import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CuadroService } from 'src/app/core/cuadro.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  id: any;

  constructor(private cuadroService: CuadroService, private router: Router) { }

  ngOnInit() {}

  newCuadro() {
    // Get max product Id from the product list
    this.cuadroService.getMaxCuadroId().subscribe((data) => (this.id = data));
    this.router.navigate(['/cuadros', this.id, 'new']);
  }
}
