import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Complaint } from 'src/app/shared/models/complaint';
import { ComplaintTable } from 'src/app/shared/models/complaintTable';
import { Filter } from 'src/app/shared/models/filter';
import { ComplaintService } from 'src/app/shared/services/complaint.service';
import { FilterUtils } from 'src/app/shared/utils/filterUtils';

@Component({
  selector: 'app-reclami',
  templateUrl: './reclami.component.html',
  styleUrls: ['./reclami.component.scss']
})
export class ReclamiComponent implements OnInit {

  filtro: Filter = {};
  @Output() elencoReclamiEvent = new EventEmitter();

  constructor(private complaintService: ComplaintService, private router: Router) { }
  complaints: Complaint[] = [];

  elenco: ComplaintTable[] = [];
  ngOnInit(): void {
    this.complaintService.getComplaints().subscribe(result => {
      this.complaints = result;
      this.elenco = this.complaints.map(c => ({
        idReclamo: c.id,
        dataSegnalazione: c.dataReclamo,
        dataPresoInCarico: c.dettaglioReclamo?.dataPresoInCarico,
        dataChiusura: c.dettaglioReclamo?.dataChiusura,
        codiceNegozio: c.dettaglioReclamo?.codiceNegozio,
        manager: c.dettaglioReclamo?.manager,
        cliente: `${c?.customer?.nome} ${c?.customer?.cognome}`,
        stato: c.dettaglioReclamo?.stato,
        gestione: c.dettaglioReclamo?.gestione,
        causaleReclamo: c.causale,
        soddisfazione: c.dettaglioReclamo?.soddisfazione
      }));
    
      
    });
  }

  addReclamo() {
    this.router.navigate(['reclamo']);
  }

  filtra($event: Filter) {
    console.log($event)
    let filterUtils: FilterUtils = new FilterUtils();
    this.complaints = filterUtils.filtra(this.complaints, $event);
    
  }
}
