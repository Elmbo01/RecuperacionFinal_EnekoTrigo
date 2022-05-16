import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Cuadro } from '../shared/cuadro';

@Injectable({
  providedIn: 'root',
})
export class CuadroService {
  private cuadrosUrl = 'https://627a7de773bad506858a243f.mockapi.io/Cuadro';

  constructor(private http: HttpClient) {}

  getCuadros(): Observable<Cuadro[]> {
    return this.http.get<Cuadro[]>(this.cuadrosUrl).pipe(
      tap((data) => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getMaxCuadroId(): Observable<number> {
    return this.http.get<Cuadro[]>(this.cuadrosUrl).pipe(
      // Get max value from an array
      map((data) =>
        Math.max.apply(
          Math,
          data.map(function (o) {
            return o.id;
          })
        )
      ),
      catchError(this.handleError)
    );
  }

  getCuadroById(id: number): Observable<Cuadro> {
    const url = `${this.cuadrosUrl}/${id}`;
    return this.http.get<Cuadro>(url).pipe(
      tap((data) => console.log('getCuadro: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  createCuadro(cuadro: Cuadro): Observable<Cuadro> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    cuadro.id = 0;
    return this.http
      .post<Cuadro>(this.cuadrosUrl, cuadro, { headers: headers })
      .pipe(
        tap((data) => console.log('createCuadro: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deleteCuadro(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.cuadrosUrl}/${id}`;
    return this.http.delete<Cuadro>(url, { headers: headers }).pipe(
      tap((data) => console.log('deleteCuadro: ' + id)),
      catchError(this.handleError)
    );
  }

  updateCuadro(cuadro: Cuadro): Observable<Cuadro> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.cuadrosUrl}/${cuadro.id}`;
    return this.http.put<Cuadro>(url, cuadro, { headers: headers }).pipe(
      tap(() => console.log('updateCuadro: ' + cuadro.id)),
      // Return the product on an update
      map(() => cuadro),
      catchError(this.handleError)
    );
  }

  private handleError(err: any) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
