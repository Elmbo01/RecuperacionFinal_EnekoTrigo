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
import { CuadroService } from '../../core/cuadro.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cuadros-new',
  templateUrl: './cuadros-new.page.html',
  styleUrls: ['./cuadros-new.page.scss'],
})
export class CuadrosNewPage implements OnInit {
  pageOrigin = 'Cuadro New';
  errorMessage: string = '';
  cuadroForm: FormGroup;
  isLoading: boolean;
  cuadroId: number = 0;
  cuadro: Cuadro = {
    id: 0,
    nombre: '',
    autor: '',
    imagen: '',
    fecha: new Date(),
   
  };

  constructor(private fb: FormBuilder,
    private activatedroute: ActivatedRoute,
    private router: Router,
    private cuadroService: CuadroService) {}

  ngOnInit(): void {
    this.cuadroForm = this.fb.group({
      nombre: '',
      cuadro: '',
      autor: '',
      fecha: '01/01/2002',
      
    });
    this.cuadroId = parseInt(this.activatedroute.snapshot.params['id']);
  }

  saveCuadro(): void {
    if (this.cuadroForm.valid) {
      if (this.cuadroForm.dirty) {
        this.cuadro = this.cuadroForm.value;
        this.cuadro.id = this.cuadroId;

        this.cuadroService
          .createCuadro(this.cuadro)
          .subscribe((code: any) =>
            code.code == 200
              ? this.onSaveComplete()
              : (this.errorMessage = code.message)
          );
      } else {
        this.onSaveComplete();
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }

  onSaveComplete(): void {
    this.cuadroForm.reset();
    this.router.navigate(['']);
  }
}

