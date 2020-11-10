import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoyaltyI } from '../user/loyalty-i';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ProductI } from '../merchant-dashboard/product-i';


@Injectable({
  providedIn: 'root'
})
export class QrscanService {

  private loyaltiesUrl = 'api/loyalties';  // URL to web api
  private productUrl = 'api/products';  // URL to web api

  constructor(private http: HttpClient) { }

  /** GET loyalties from the server */
  getLoyalties(): Observable<LoyaltyI[]> {
    return this.http.get<LoyaltyI[]>(this.loyaltiesUrl)
  }

    /** GET products from the server */
    getProducts(): Observable<ProductI[]> {
      return this.http.get<ProductI[]>(this.productUrl)
    }

  /** GET loyalty by id. Will 404 if id not found */
  getloyalty(id: number): Observable<LoyaltyI> {
    const url = `${this.loyaltiesUrl}/${id}`;
    return this.http.get<LoyaltyI>(url).pipe(
      // tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<LoyaltyI>(`getLoyalty id=${id}`))
    );
  }

  /** POST: add a new loyalty to the server */
  addLoyalty(loyalty: LoyaltyI): Observable<LoyaltyI> {
    // const l = {loyalty};
    return this.http.post<LoyaltyI>(this.loyaltiesUrl, loyalty, this.httpOptions).pipe(
      tap(_ => console.log('got here')),
      catchError(this.handleError<LoyaltyI>('addLoyalty'))
    );
  }

  addProduct(product: ProductI): Observable<ProductI> {
    return this.http.post<ProductI>(this.productUrl, product, this.httpOptions).pipe(
      tap(_ => console.log('got here in qr service, added product:',product)),
      catchError(this.handleError<ProductI>('addProduct'))
    );
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


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
