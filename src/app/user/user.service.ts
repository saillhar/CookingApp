import { User } from './user'
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
  
  constructor(private http: Http) { }
  
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
  
  /*
   * A analyser pour comprendre la non-fonctionnalité 
   * EXCEPTION: Cannot find a differ supporting object
   * '[object Object]' of type 'object'. NgFor only supports binding to Iterables such as Arrays.
   * Surement a mettre en objet User mais le problème persiste
   */
  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
  
  getUsers (): Observable<any> {
    return this.http.get('app/user/getUsers.json')
      .map(res => res.json())
//      .map(this.extractData)
      .catch(this.handleError)
      ;
  }
  
//  getUsers (){
//    return this.http.get('app/user/getUsers.json')
//      .map(res => res.json())
//      .catch(this.handleError)
//      ;
//  }
}
