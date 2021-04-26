import { Injectable } from '@angular/core';
import { Enlace } from './enlace';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root',
})
export class EnlaceService {

  private enlacesUrl = 'api/pocket';
  private commondbUrl = 'api/commondb';

  constructor(
    private http: HttpClient
  ) { }

  /** POST: add a new hero to the server */
  addEnlace(enlace: Enlace): Observable<Enlace> {
    console.log("El enlace agregado fue: " + enlace.asunto);
    return this.http.post<Enlace>(this.commondbUrl, enlace, httpOptions).pipe(
      catchError(this.handleError<Enlace>('addEnlace'))
    );
  }

  /*GET heroes whose name contains search term */
  searchEnlaces(term: string): Observable<Enlace[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Enlace[]>(`${this.enlacesUrl}/?asunto=${term}`).pipe(
      catchError(this.handleError<Enlace[]>('searchEnlaces', []))
    );
  }

    /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}