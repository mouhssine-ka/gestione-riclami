import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DettaglioReclamo } from '../models/elencoReclami';
import { complaint } from '../models/complaint';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  constructor(private httpClient: HttpClient) { }

  api = "http://localhost:3000/complaints";

  getComplaints(): Observable<complaint[]>{
    return this.httpClient.get<complaint[]>(this.api);
  }
  // addComplaints(){
    //da implementare 
  // }
}
