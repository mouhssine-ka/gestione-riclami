import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DettaglioReclamo } from '../models/elencoReclami';
import { Complaint } from '../models/complaint';
import { ComplaintTable } from '../models/complaintTable';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  constructor(private httpClient: HttpClient) { }

  api = "http://localhost:3000/complaints";

  getComplaints(): Observable<Complaint[]>{
    return this.httpClient.get<Complaint[]>(this.api);
  }
   addComplaints( reclamo : Complaint){
      return this.httpClient.post<Complaint>(this.api,reclamo)
   }
}
