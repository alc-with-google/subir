import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoyaltyI } from '../user/loyalty-i';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


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

  /** GET hero by id. Will 404 if id not found */
  getloyalty(id: number): Observable<LoyaltyI> {
    const url = `${this.loyaltiesUrl}/${id}`;
    return this.http.get<LoyaltyI>(url).pipe(
      // tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<LoyaltyI>(`getLoyalty id=${id}`))
    );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
