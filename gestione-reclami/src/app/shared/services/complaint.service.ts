import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { DettaglioReclamo } from '../models/elencoReclami';
import { Complaint } from '../models/complaint';
import { ComplaintTable } from '../models/complaintTable';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {
  constructor(private httpClient: HttpClient, private router: Router) { } // Inject Router

  api = "http://localhost:3000/complaints";

  getComplaints(): Observable<Complaint[]> {
    return this.httpClient.get<Complaint[]>(this.api);
  }
  addComplaints(reclamo: Complaint) {
    return this.httpClient.post<Complaint>(this.api, reclamo)
  }
  getComplaintsById(id: String): Observable<any> {
    return this.httpClient.get(this.api + "/" + id).pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse): any {
    if (error.status === 404) {
      console.error('Resource not found:', error);
      this.router.navigate(['reclami']); // Redirect to a "Not Found" route
    }
  }
}
