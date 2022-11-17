import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient,
    private router: Router) { }

  doGet(url: string, token: string): Observable<any> {
    console.log('Do Get:' + url);
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    if (token) {
      headers = headers.append('Authorization', `Bearer ${token}`);
    }
    const options = { headers: headers, withCredentials: false };
    return this.http.get(url, options);
    /*return this.http.get<Response>(url, options).pipe(
      map((response: Response) =>
        this.extractData(response)
      ),
      catchError(this.handleError<any>('doGet'))
    );*/
  }

  doPost(url: string, payload: any, token: string): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    if (token) {
      headers = headers.append('Authorization', `Bearer ${token}`);
    }
    const options = { headers: headers, withCredentials: false };
    return this.http.post<Response>(url, payload, options).pipe(
      map((response: Response) => this.extractData(response)),
      catchError(this.handleError<any>('doPost'))
    );
  }

  doPostWithMultipart(url: string, formData: FormData, token: string): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    if (token) {
      headers = headers.append('Authorization', `Bearer ${token}`);
    }
    const options = { headers: headers, withCredentials: false };
    return this.http.post<Response>(url, formData, options).pipe(
      map((response: Response) => this.extractData(response)),
      catchError(this.handleError<any>('doPost'))
    );
  }

  private extractData(res: Response) {
    let result = res;
    return result || {};
  }

  doPut(url: string, payload: any, token: string): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    if (token) {
      headers = headers.append('Authorization', `Bearer ${token}`);
    }
    const options = { headers: headers, withCredentials: false };
    return this.http.put<Response>(url, payload, options).pipe(
      map((response: Response) => this.extractData(response)),
      catchError(this.handleError<any>('doPut'))
    );
  }

  doPatch(url: string, payload: any, token: string): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    if (token) {
      headers = headers.append('Authorization', `Bearer ${token}`);
    }
    const options = { headers: headers, withCredentials: false };
    return this.http.patch<Response>(url, payload, options).pipe(
      map((response: Response) => this.extractData(response)),
      catchError(this.handleError<any>('doPatch'))
    );
  }

  doDelete(url: string, token: string): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    if (token) {
      headers = headers.append('Authorization', `Bearer ${token}`);
    }
    const options = { headers: headers, withCredentials: false };
    return this.http.delete<Response>(url, options).pipe(
      map((response: Response) => this.extractData(response)),
      catchError(this.handleError<any>('doDelete'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (errorResponse: HttpErrorResponse) => new Observable<T>((observer) => {
      if (errorResponse) {
        const statusCode = errorResponse.status;
        let errorMessage: string = errorResponse.message;

        if (errorResponse.error && errorResponse.error.data) {
          const errorData = errorResponse.error.data;
          if (errorData.message) {
            errorMessage = errorData.message
          } else if (typeof errorData == 'string') {
            errorMessage = errorData
          }
        }
        observer.error(errorMessage);
      } else {
        observer.error("Unknown error");
      }
    });
  }
}
