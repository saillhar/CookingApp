import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Recipe } from './recipe';
import 'rxjs/add/operator/map';

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

  getRecipes(): Observable<any> {
    return this.http.get('http://localhost:1337/recipe')
      .map(res => res.json())
      ;
  }

  addRecipe(recipe: any) {
    // var json = JSON.stringify({var1: 'test'});
    // var params = 'json=' + json;
    let body = JSON.stringify({
      "name": recipe.name,
      "preparation_time": recipe.preparation_time,
      "image": recipe.image,
      "cooking_time": recipe.cooking_time,
      "ingredients": recipe.ingredients,
      "steps": recipe.steps
    });
    let headers = new Headers({ 
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:1337/recipe/create', body, options)
      .map(res => res.json()).subscribe(data => console.log(data));;
  }
}
