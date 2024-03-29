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

  ngOnInit(): void {
    this.idReclamo = this.route.snapshot.paramMap.get("id") ?? '';
    this.complaintService.getComplaintsById(this.idReclamo).subscribe(result => {
      console.log(result)
      this.reclamoForm.patchValue(result);
    })
  }

  constructor(private fb: NonNullableFormBuilder, private complaintService: ComplaintService, private route: ActivatedRoute, private router: Router) { }

  onSubmit() {
    let a = this.reclamoForm.getRawValue()
    this.complaintService.getComplaints().subscribe((result) => {
      console.log(result)
      a.id = result.length + 1 + "";
      this.complaintService.addComplaints(a).subscribe(() => {
        console.log('value', this.reclamoForm.getRawValue())
        this.router.navigate(['reclami'])
      },
        (error) => {
          console.log("ciao")
          this.router.navigate(['reclami']);
        })
    })

  }
  @Output() showFormEvent = new EventEmitter();

  goBack() {
    this.router.navigate(['reclami']);
  }
}
