import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service'

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers: [RecipeService]
})
export class RecipeComponent /* implements OnInit */{
  postData: string;
  recipe: any;

  constructor(private recipeService: RecipeService) { }

  // ngOnInit() {
  // }
  addRecipe(){
    console.log('partial work');
    this.recipeService.addRecipe()
      .subscribe(
        data => this.postData = JSON.stringify(data),
        error => alert(error),
        () =>console.log("finish")
      );
  }
}
