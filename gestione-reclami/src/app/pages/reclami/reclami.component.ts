import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reclami',
  templateUrl: './reclami.component.html',
  styleUrls: ['./reclami.component.scss']
})
export class ReclamiComponent {
  constructor(private router: Router){}
  addReclamo() {
    this.router.navigate(['reclamo']);
  }

}
