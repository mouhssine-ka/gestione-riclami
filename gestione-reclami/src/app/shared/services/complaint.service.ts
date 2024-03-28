import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DettaglioReclamo } from '../models/elencoReclami';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  constructor(private httpClient: HttpClient) { }

  api = "http://localhost:3000/complaints";

  getComplaints(): Observable<DettaglioReclamo[]>{
    return this.httpClient.get<DettaglioReclamo[]>(this.api);
  }
  // addComplaints(){
    //da implementare 
  // }
}
