import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import * as chalk from 'chalk';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private statusUrl = '/api/status';

  constructor(private http: HttpClient) { }

  // Get the status
  getStatus() {
    return this.http.get(this.statusUrl)
              .toPromise()
              .catch(this.handleError); //call the handleerror
  }

  // Error handling
  private handleError(err: HttpErrorResponse): Observable<never>  {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(chalk.red(errorMessage));
    return throwError(errorMessage);
  }
}
