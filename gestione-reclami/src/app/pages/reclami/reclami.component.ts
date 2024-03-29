import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Filter } from 'src/app/shared/models/filter';

@Component({
  selector: 'app-reclami',
  templateUrl: './reclami.component.html',
  styleUrls: ['./reclami.component.scss']
})
export class ReclamiComponent {

  filtro: Filter = {};
  constructor(private router: Router) { }

  addReclamo() {
    this.router.navigate(['reclamo']);
  }

  filtra($event: Filter) {
    this.filtro = $event;
  }
}
