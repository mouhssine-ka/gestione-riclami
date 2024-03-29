import { Component, Input, OnInit } from '@angular/core';
import { Complaint } from 'src/app/shared/models/complaint';
import { ComplaintService } from 'src/app/shared/services/complaint.service';
import { ComplaintTable } from 'src/app/shared/models/complaintTable';
import { Router } from '@angular/router';
import { FilterUtils } from 'src/app/shared/utils/filterUtils';

@Component({
  selector: 'app-elenco',
  templateUrl: './elenco.component.html',
  styleUrls: ['./elenco.component.scss']
})
export class ElencoComponent implements OnInit {

  complaints: Complaint[] = [];

  elenco: ComplaintTable[] = [];

  loadingIndicator: boolean = true;

  @Input() filtroEvent = [];

  constructor(private complaintService: ComplaintService, private router: Router) { }

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
      console.log(this.elenco)
      this.loadingIndicator = false;
    });
  }

  edit(idReclamo: String) {
    console.log(idReclamo)
    this.router.navigate(['reclamo', idReclamo]);
  }


}