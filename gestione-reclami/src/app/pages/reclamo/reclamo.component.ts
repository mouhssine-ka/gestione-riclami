import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ComplaintService } from 'src/app/shared/services/complaint.service';

@Component({
  selector: 'app-reclamo',
  templateUrl: './reclamo.component.html',
  styleUrls: ['./reclamo.component.scss']
})
export class ReclamoComponent implements OnInit {

  idReclamo = "";
  reclamoForm = this.fb.group({
    id: [''],
    dataReclamo: ['', Validators.required],
    causale: ['', Validators.required],
    complaintText: ['', Validators.required],
    shoponline: [false, Validators.required],
    regione: ['', Validators.required],
    provinciaReclamo: ['', Validators.required],
    polo: ['', Validators.required],
    customer: this.fb.group({
      nome: ['', Validators.required],
      cognome: ['', Validators.required],
      email: ['', Validators.required],
      telefono: [''],
      cellulare: ['', Validators.required],
      indirizzo: ['', Validators.required],
      provincia: ['', Validators.required]
    })
  })

  ngOnInit(): void { //metodo per inizializzare un componente 
    this.idReclamo = this.route.snapshot.paramMap.get("id") ?? ''; // Ottiene l'ID del reclamo o lo imposta come stringa vuota se non presente
    this.complaintService.getComplaintsById(this.idReclamo).subscribe(result => {// Ottiene il reclamo dal servizio tramite l'ID e aggiorna il valore del form
      console.log(result)
      this.reclamoForm.patchValue(result);
    })
  }

  constructor(private fb: NonNullableFormBuilder, private complaintService: ComplaintService, private route: ActivatedRoute, private router: Router) { }

  onSubmit() {
    let a = this.reclamoForm.getRawValue() //assegno ad una variabile i valori del contenuti nel form
    this.complaintService.getComplaints().subscribe((result) => {  // Ottengo una lista dei reclami dal servizio
      console.log(result)
      a.id = result.length + 1 + ""; // Assegna un ID al reclamo aggiungendo uno alla lunghezza della lista dei reclami
      this.complaintService.addComplaints(a).subscribe(() => {   // Aggiungo il reclamo tramite il servizio
        console.log('value', this.reclamoForm.getRawValue())
        this.router.navigate(['reclami']) //Una volta cliccato torna alla pagina contente l'elenco
      },
        (error) => {
          this.router.navigate(['reclami']); //in caso di errore torna all'altra pagina (reclami)
        })
    })

  }

  goBack() {
    this.router.navigate(['reclami']); //tasto annulla che torna indietro all 'elenco
  }
}
