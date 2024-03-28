import { Component, OnInit } from '@angular/core';
import { Complaint } from 'src/app/shared/models/complaint';
import { ComplaintService } from 'src/app/shared/services/complaint.service';
import { ComplaintTable } from 'src/app/shared/models/complaintTable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-elenco',
  templateUrl: './elenco.component.html',
  styleUrls: ['./elenco.component.scss']
})
export class ElencoComponent implements OnInit {

  complaints: Complaint[] = [];
  elenco: ComplaintTable[] = [];

  loadingIndicator: boolean = true;

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

  edit() {
    this.router.navigate(['reclamo']);
  }
}