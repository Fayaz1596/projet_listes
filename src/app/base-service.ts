import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable(
{
    providedIn: 'root'
})

export class BaseService 
{
    constructor(private http: HttpClient)
    {
    }

    getBeers():Observable<any>
    {
        return this.http.get<any>('https://api.punkapi.com/v2/beers')
        .pipe(
            tap(donnee => {
                console.log(donnee)
            }),
            catchError(this.handleError('getBeers', []))
        )
    }

   /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return (error);
    };
  }
}
