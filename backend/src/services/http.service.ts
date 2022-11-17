import { Observable } from 'rxjs';
import * as request from 'request';
import { Response } from "express";

export class HttpService {

  constructor() { }

  doGet(url: string, token?): Observable<any> {
    return Observable.create(observer => {
      var headers;
      if (token) {
        headers = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      } else {
        headers = {
          'Content-Type': 'application/json'
        }
      }
      request(url, {headers: headers, json: true }, (err, res, body) => {
        if (body) {
          if (!body.error) {
            observer.next(body);
          } else {
            observer.error(body.error);
          }
        } else if (err) observer.error(err);
        else observer.error("Error empty response");
      });
    });
  }

  doPost(url: string, body, token?): Observable<any> {
    return Observable.create(observer => {
      var headers;
      if (token) {
        headers = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      } else {
        headers = {
          'Content-Type': 'application/json'
        }
      }
      request.post(url, {headers: headers, body: body, json: true }, (err, res, body) => {
        if (body) {
          if (!body.error) {
            observer.next(body);
          } else {
            observer.error(body.error);
          }
        } else if (err) observer.error(err);
        else observer.error("Error empty response");
      });
    });
  }

  doMultipartPost(url: string, body:any, token?): Observable<any> {
    return Observable.create(observer => {
      var headers;
      if (token) {
        headers = {
          'Content-Type': 'multipart/form-data; boundary=' + body._boundary,
          'Authorization': `Bearer ${token}`
        }
      } else {
        headers = {
          'Content-Type': 'multipart/form-data; boundary=' +  body._boundary
        }
      }
      request.post(url, {headers: headers, body: body }, (err, res, body) => {
        if (body) {
          if (!body.error) {
            observer.next(body);
          } else {
            observer.error(body.error);
          }
        } else if (err) observer.error(err);
        else observer.error("Error empty response");
      });
    });
  }

  doSet(url: string, body, token?): Observable<any> {
    return Observable.create(observer => {
      var headers;
      if (token) {
        headers = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      } else {
        headers = {
          'Content-Type': 'application/json'
        }
      }

      request.put(url, { headers: headers, body: body, json: true }, (err, res, body) => {
        if (res && (res.statusCode == 204 || res.statusCode == 200)) {
          observer.next(res.statusCode);
        }
        else if (err) {
          observer.error(err);
        }
        else {
          observer.error("Error empty response");
        }
      });
    });
  }

  doPatch(url: string, body, token?): Observable<any> {
    return Observable.create(observer => {
      var headers;
      if (token) {
        headers = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      } else {
        headers = {
          'Content-Type': 'application/json'
        }
      }

      request.patch(url, { headers: headers, body: body, json: true }, (err, res, body) => {
        if (res && (res.statusCode == 204 || res.statusCode == 200)) {
          observer.next(res.statusCode);
        }
        else if (err) {
          console.error(err)
          observer.error(err);
        }
        else {
          observer.error("Error empty response");
        }
      });
    });
  }

  doDelete(url: string, token?): Observable<any> {
    return new Observable(observer => {
      var headers;
      if (token) {
        headers = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      } else {
        headers = {
          'Content-Type': 'application/json'
        }
      }

      request.delete(url, {headers: headers, json: true }, (err, res, body) => {
        if (res && (res.statusCode == 204 || res.statusCode == 200)) {
          observer.next(res.statusCode);
        }
        else if (err) {
          observer.error(err);
        }
        else {
          observer.error("Error empty response");
        }
      });
    });
  }

  handleError(error:any, response:Response) {
    if (error && error.statusCode) {
        response.status(error.statusCode).send({ "status": false, "data": error });
    } else {
        response.status(500).send({ "status": false, "data": error });
    }
  }

}

export const httpService = new HttpService();
