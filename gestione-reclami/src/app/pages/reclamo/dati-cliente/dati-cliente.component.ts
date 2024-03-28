import { Component } from '@angular/core';
import { provinceItaliane } from 'src/app/shared/models/forms/select-values';
import { ReclamoComponent } from '../reclamo.component';

@Component({
  selector: 'app-dati-cliente',
  templateUrl: './dati-cliente.component.html',
  styleUrls: ['./dati-cliente.component.scss']
})
export class DatiClienteComponent {
 
  provinceItaliane = provinceItaliane;

  constructor(private readonly parent: ReclamoComponent) {}

  get datiClienteForm() {
    return this.parent.reclamoForm.controls['customer']
  }
}