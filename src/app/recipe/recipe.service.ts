import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Recipe } from './recipe';

@Injectable()
export class RecipeService {

  constructor(private http: Http) { }

  // addRecipe(){
  //   let headers = new Headers();
  //     headers.append('Content-Type', 'application/json');
  //     this.http.post('http://localhost:1337/recipe', {
  //       headers: headers
  //     })
  //     .map(res => res.json());
  //  }
    addRecipe(){
    var json = JSON.stringify({var1: 'test'});
    var params = 'json=' + json;
    let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post('http://localhost:1337/recipe', params,{
        headers: headers
      })
      .map(res => res.json());
   }
}
