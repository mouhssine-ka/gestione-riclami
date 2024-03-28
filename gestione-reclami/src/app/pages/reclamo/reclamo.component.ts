import { Component, EventEmitter, Output } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ComplaintService } from 'src/app/shared/services/complaint.service';

@Component({
  selector: 'app-reclamo',
  templateUrl: './reclamo.component.html',
  styleUrls: ['./reclamo.component.scss']
})
export class ReclamoComponent {

  reclamoForm = this.fb.group({
    id: [''],
    dataReclamo: [Validators.required],
    causale: ['', Validators.required],
    complaintText: ['', Validators.required],
    shoponline: [false, Validators.required],
    regione: ['', Validators.required],
    provincia: ['', Validators.required],
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


  constructor(private fb: NonNullableFormBuilder, private complaintService: ComplaintService, private router: Router) { }

  onSubmit() {
    // Esegui azioni con i dati dai due componenti figlio
    let a = this.reclamoForm.getRawValue()
    this.complaintService.getComplaints().subscribe(result => {
      a.id = result.length + 1 + "";
      this.complaintService.addComplaints(a).subscribe(() => {
        console.log('value', this.reclamoForm.getRawValue())
        this.router.navigate(['reclami'])
      })
    })

  }
  @Output() showFormEvent = new EventEmitter();

  goBack() {
    this.router.navigate(['reclami']);
  }
}
