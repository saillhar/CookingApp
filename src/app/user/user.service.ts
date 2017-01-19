import { User } from './user'
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
  
  constructor(private http: Http) { }
  
  // Exemple pour une lecture d'un fichier json
//  getPeople() {
//    return this.http.get('api/people.json')
//      .map(response => response.json());
//  }
  
  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
  
  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
  
  getUsers (): Observable<User[]> {
    return this.http.get('app/user/getUsers.php')
      .map(res => res.json())
//      .map(this.extractData)
      .catch(this.handleError)
      ;
  }
}
