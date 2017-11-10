import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class RecipeService {
  private   recipes: Recipe[] = [
    new Recipe('Lobster Roll', 'Lobster on a roll', 'http://www.seriouseats.com/images/2016/12/20161208-sous-vide-lobster-59-lobster-roll-duo.jpg',
        [ new Ingredient('Lobster', 1),
          new Ingredient('Roll', 1)
        ]),
    new Recipe('Spring Roll', 'Chinese spring rolls are good', 'https://eat24hours.com/files/cuisines/v4/thai.jpg?e24v=103?e24v=178?e24v=178', [])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
      return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
      this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe(recipe: Recipe) {
      this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
     this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

}
