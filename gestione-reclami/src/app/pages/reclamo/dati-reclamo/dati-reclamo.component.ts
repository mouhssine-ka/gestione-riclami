import { Component } from '@angular/core';
import { causale, provinceItaliane, regioniItaliane, poloInternational } from 'src/app/shared/models/forms/select-values';
import { ReclamoComponent } from '../reclamo.component';

@Component({
  selector: 'app-dati-reclamo',
  templateUrl: './dati-reclamo.component.html',
  styleUrls: ['./dati-reclamo.component.scss']
})
export class DatiReclamoComponent {

  causaleTipi = causale;
  regioniItaliane = regioniItaliane;
  provinceItaliane = provinceItaliane;
  poloInternational = poloInternational;

  constructor(private readonly parent : ReclamoComponent) {
    // Inizializza il form nel costruttore
  }
  get datiReclamoForm()
  {
    return this.parent.reclamoForm
  }
}
