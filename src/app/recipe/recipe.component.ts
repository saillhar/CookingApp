import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { RecipeService } from './recipe.service'

@Component({
  moduleId: module.id,
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers: [RecipeService]
})
export class RecipeComponent implements OnInit {
  formRecipeCreate: FormGroup;
  recipes: Array<any> = [];
  postData: string;
  recipe: any;

  constructor(public fb: FormBuilder, private recipeService: RecipeService) { }

  ngOnInit() {
    this.formRecipeCreate = this.fb.group({
      name: ['', Validators.required],
      preparation_time: ['', Validators.required],
      image: ['', Validators.required],
      cooking_time: ['', Validators.required],
      ingredients: ['', Validators.required],
      steps: ['', Validators.required]
    });
    this.formRecipeCreate.setValue({
      name: 'quelque chose',
      preparation_time: '15',
      image: 'de parametrer',
      cooking_time: '15',
      ingredients: 'de parametrer',
      steps: 'de parametrer'
    });
    this.getRecipes();
  }

  getRecipes() {
    this.recipeService.getRecipes()
      .subscribe(
      recipes => this.recipes = recipes,
      error => console.log(error));
  }
  
  addRecipe() {
    this.recipeService.addRecipe(this.formRecipeCreate.value);
  }
}
