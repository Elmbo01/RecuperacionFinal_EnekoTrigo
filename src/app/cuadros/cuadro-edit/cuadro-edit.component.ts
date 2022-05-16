import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ViewChildren,
  ElementRef,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  FormArray,
  Validators,
  FormControlName,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Cuadro } from '../../shared/cuadro';
import { CuadroService } from '../../core/cuadro.service';

@Component({
  templateUrl: './cuadro-edit.component.html',
})
export class CuadroEditComponent implements OnInit {
  pageTitle = 'Cuadro Edit';
  errorMessage: string = '';
  cuadroForm: any;

  cuaId: number = 0;
  cuadro: Cuadro = {
    id: 0,
    nombre: '',
    autor: '',
    fecha: new Date,
    imagen: '',
  };

  constructor(
    private fb: FormBuilder,
    private activatedroute: ActivatedRoute,
    private router: Router,
    private cuadroService: CuadroService
  ) {}

  ngOnInit(): void {
    this.cuadroForm = this.fb.group({
      nombre: '',
      autor: '',
      fecha: new Date,
      imagen: '',
    });

    // Read the product Id from the route parameter
    this.cuaId = parseInt(this.activatedroute.snapshot.params['id']);
    this.getCuadro(this.cuaId);
  }

  getCuadro(id: number): void {
    this.cuadroService.getCuadroById(id).subscribe(
      (cuadro: Cuadro) => this.displayCuadro(cuadro),
      (error: any) => (this.errorMessage = <any>error)
    );
  }

  displayCuadro(cuadro: Cuadro): void {
    if (this.cuadroForm) {
      this.cuadroForm.reset();
    }
    this.cuadro = cuadro;
    this.pageTitle = `Edit Cuadro: ${this.cuadro.nombre}`;

    // Update the data on the form
    this.cuadroForm.patchValue({
      nombre: this.cuadro.nombre,
      autor: this.cuadro.autor,
      fecha: this.cuadro.fecha,
      imagen: this.cuadro.imagen, 
    });
  }

  deleteCuadro(): void {
    if (this.cuadro.id === 0) {
      // Don't delete, it was never saved.
      this.onSaveComplete();
    } else {
      if (confirm(`Really delete the cuadro: ${this.cuadro.nombre}?`)) {
        this.cuadroService.deleteCuadro(this.cuadro.id).subscribe(
          () => this.onSaveComplete(),
          (error: any) => (this.errorMessage = <any>error)
        );
      }
    }
  }

  saveCuadro(): void {
    if (this.cuadroForm.valid) {
      if (this.cuadroForm.dirty) {
        this.cuadro = this.cuadroForm.value;
        this.cuadro.id = this.cuaId;

        this.cuadroService.updateCuadro(this.cuadro).subscribe(
          () => this.onSaveComplete(),
          (error: any) => (this.errorMessage = <any>error)
        );
      } else {
        this.onSaveComplete();
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }

  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.cuadroForm.reset();
    this.router.navigate(['']);
  }
}
