import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cuadro } from '../../shared/cuadro';
import { ActivatedRoute, Router } from '@angular/router';
import { CuadroService } from '../../core/cuadro.service';

@Component({
  selector: 'app-cuadro-new',
  templateUrl: './cuadro-new.component.html',
  styleUrls: ['./cuadro-new.component.css'],
})
export class CuadroNewComponent implements OnInit {
  pageTitle = 'Cuadro New';
  errorMessage: string = '';
  cuadroForm: any;

  sngId: number = 0;
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
      fecha: '',
      imagen: '',
    });

    // Read the product Id from the route parameter
    this.sngId = parseInt(this.activatedroute.snapshot.params['cuadroId']);
  }

  saveCuadro(): void {
    if (this.cuadroForm.valid) {
      if (this.cuadroForm.dirty) {
        this.cuadro = this.cuadroForm.value;
        this.cuadro.id = this.sngId;

        this.cuadroService.createCuadro(this.cuadro).subscribe(
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
