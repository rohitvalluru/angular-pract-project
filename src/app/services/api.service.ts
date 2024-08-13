import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://api4.binance.com/api/v3/ticker/24hr';

  constructor(private http : HttpClient) { }

  getData(endpoint: string): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}`).pipe(catchError(this.handleError))
  }

  private handleError(error: any){
    console.error('API call error', error);
    return throwError(error);
  } 
}

