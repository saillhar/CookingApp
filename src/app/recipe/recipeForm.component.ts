import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl , Validators} from '@angular/forms';
import { RecipeService } from './recipe.service'

@Component({
  moduleId: module.id,
  selector: 'sd-recipf',
  providers: [RecipeService],
  template:`
    <form (ngSubmit)="addRecipe()" [formGroup]="formRecipeCreate">
      <input formControlName="name" type="text" placeholder="name of your recipe" />
      <span [hidden]="formRecipeCreate.controls.name.valid">Champ obligatoire!</span>
  <br>
      <input formControlName="preparation_time" type="text" placeholder="type of the recipe" />
      <span [hidden]="formRecipeCreate.controls.preparation_time.valid">Champ obligatoire!</span>
  <br>
      <input formControlName="image" type="text" placeholder="type of the recipe" />
      <span [hidden]="formRecipeCreate.controls.image.valid">Champ obligatoire!</span>
  <br>
      <input formControlName="cooking_time" type="text" placeholder="type of the recipe" />
      <span [hidden]="formRecipeCreate.controls.cooking_time.valid">Champ obligatoire!</span>
  <br>
      <input formControlName="ingredients" type="text" placeholder="type of the recipe" />
      <span [hidden]="formRecipeCreate.controls.ingredients.valid">Champ obligatoire!</span>
  <br>
      <input formControlName="steps" type="text" placeholder="type of the recipe" />
      <span [hidden]="formRecipeCreate.controls.steps.valid">Champ obligatoire!</span>
  <br>
      <button type="submit">Ajouter</button>
    </form>

  {{ formRecipeCreate.value | json }}
  {{ formRecipeCreate.valid }}
  {{ postData }}
  `
})

export class RecipeFormComponent implements OnInit{
  formRecipeCreate: FormGroup;
  postData: string;
  
  constructor(public fb: FormBuilder, private recipeService: RecipeService) {}
  
 addRecipe(){
    console.log('partial work');
    this.recipeService.addRecipe()
      .subscribe(
        data => this.postData = JSON.stringify(data),
        error => alert(error),
        () =>console.log("finish")
      );
  }
  
  ngOnInit(){
    this.formRecipeCreate= this.fb.group({
      name: ['', Validators.required],
      preparation_time: ['', Validators.required],
      image: ['', Validators.required],
      cooking_time: ['', Validators.required],
      ingredients: ['', Validators.required],
      steps: ['', Validators.required]
    });
    this.formRecipeCreate.setValue({
      name: 'quelque chose',
      preparation_time:'de parametrer',
      image:'de parametrer',
      cooking_time:'de parametrer',
      ingredients:'de parametrer',
      steps:'de parametrer'
    });
  }
}