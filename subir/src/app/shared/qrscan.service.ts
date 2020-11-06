import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoyaltyI } from '../user/loyalty-i';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class QrscanService {

  private loyaltiesUrl = 'api/loyalties';  // URL to web api

  constructor(private http: HttpClient) { }

  /** GET heroes from the server */
  getLoyalties(): Observable<LoyaltyI[]>{
    return this.http.get<LoyaltyI[]>(this.loyaltiesUrl)
  }

}
