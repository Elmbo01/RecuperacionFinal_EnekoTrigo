import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  FormArray,
  Validators,
  FormControlName,
} from '@angular/forms';
import { Cuadro } from '../../shared/cuadro';
import { CuadroService } from '../../core/cuadro.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cuadros-edit',
  templateUrl: './cuadros-edit.page.html',
  styleUrls: ['./cuadros-edit.page.scss'],
})
export class CuadrosEditPage implements OnInit {
  pageOrigin = 'Editar Cuadro';
  errorMessage: string = '';
  cuadroForm: any;
  isLoading: boolean;
  cuadroId: number = 0;
  cuadro: Cuadro = {
    id: 0,
    nombre: '',
    autor: '',
    imagen: '',
    fecha: new Date(),
   
  };
  constructor(
    private fb: FormBuilder,
    private activatedroute: ActivatedRoute,
    private router: Router,
    private cuadroService: CuadroService) { }

  ngOnInit(): void {
    this.cuadroForm = this.fb.group({
      nombre: '',
      autor: '',
      imagen: '',
      fecha: new Date(),
    });

    this.cuadroId = parseInt(this.activatedroute.snapshot.params['id']);
    this.getCuadro(this.cuadroId);

}

getCuadro(id: number): void {
  this.isLoading = true;
  this.cuadroService.getCuadroById(id).subscribe(
    (cuadro: Cuadro) => this.displayCuadro(cuadro),
    (error: any) => (this.errorMessage = <any>error)
  );
  this.isLoading = false;
}


displayCuadro(cuadro: Cuadro): void {
    if (this.cuadroForm) {
      this.cuadroForm.reset();
    }
    this.cuadro = cuadro[0];
    this.pageOrigin = `Editar Cuadro`;

    // Update the data on the form
    this.cuadroForm.patchValue({
      nombre: this.cuadro.nombre,
      autor: this.cuadro.autor,
      imagen: this.cuadro.imagen,
      fecha: this.cuadro.fecha,
    });
  }

  deleteCuadro(): void {
    if (this.cuadro.id === 0) {
      // Don't delete, it was never saved.
      this.onSaveComplete();
    } else {
      if (confirm(`Really delete the cuadro: ${this.cuadro.id}?`)) {
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
        this.cuadro.id = this.cuadroId;
        this.cuadroService
          .updateCuadro(this.cuadro)
          .subscribe((code: any) =>
            code.code == 100
              ? (this.errorMessage = code.message)
              : this.onSaveComplete()
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

