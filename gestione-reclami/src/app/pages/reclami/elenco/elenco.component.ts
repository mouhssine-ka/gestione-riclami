import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Complaint } from 'src/app/shared/models/complaint';
import { ComplaintService } from 'src/app/shared/services/complaint.service';
import { ComplaintTable } from 'src/app/shared/models/complaintTable';
import { Router } from '@angular/router';
import { FilterUtils } from 'src/app/shared/utils/filterUtils';
import { Filter } from 'src/app/shared/models/filter';

@Component({
  selector: 'app-elenco',
  templateUrl: './elenco.component.html',
  styleUrls: ['./elenco.component.scss']
})
export class ElencoComponent{

  @Input() elenco: ComplaintTable[] = [];

  constructor(private router: Router) { }

  edit(idReclamo: String) {
    console.log(idReclamo)
    this.router.navigate(['reclamo', idReclamo]);
  }

}