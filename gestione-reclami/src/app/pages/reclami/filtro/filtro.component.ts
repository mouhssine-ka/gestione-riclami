import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, Validators, FormArray, NonNullableFormBuilder, FormBuilder } from '@angular/forms';
import { Filter } from 'src/app/shared/models/filter';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent {
  constructor(private readonly nonNullableFormBuilder: NonNullableFormBuilder, private readonly formBuilder: FormBuilder) {}

  hasAnyValue(formGroup: FormGroup): boolean {
    const rawValue = formGroup.getRawValue();
    return Object.values(rawValue).some(value => !!value);
  }

  FilterForm: FormGroup = this.formBuilder.group({
    codiceNegozio: [null],
    descrizione: [null],
    stato: [null],
    gestione: [null],
    dataSegnalizione: [null],
    area: [null],
    causale: [null],
    idReclamo: [null],
    nome: [null],
    cognome: [null]
  });

  @Output() FilterClicked = new EventEmitter<Filter>();

  onSubmit(): void {
    let filter: Filter;
    filter = this.parseForm();
    this.FilterClicked.emit(filter);
    // console.log('form ->', this.FilterForm.getRawValue())
  }

  parseForm(): Filter {
    let formValues = this.FilterForm.getRawValue();
    let filter: Filter = {
      codiceNegozio: formValues.codiceNegozio,
      descrizione: formValues.descrizione,
      stato: formValues.stato,
      gestione: formValues.gestione,
      dataSegnalizione: formValues.dataSegnalizione,
      area: formValues.area,
      causale: formValues.causale,
      idReclamo: formValues.idReclamo,
      nome: formValues.nome,
      cognome: formValues.cognome
   };
  
   return filter;
  }
}
