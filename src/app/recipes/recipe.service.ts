import { Injectable } from '@angular/core';
import { Recipe } from './recipe';

@Injectable()
export class RecipeService {
  private   recipes: Recipe[] = [
    new Recipe('Lobster Roll', 'Lobster on a roll', 'http://www.seriouseats.com/images/2016/12/20161208-sous-vide-lobster-59-lobster-roll-duo.jpg', []),
    new Recipe('Spring Roll', 'Chinese spring rolls are good', 'https://eat24hours.com/files/cuisines/v4/thai.jpg?e24v=103?e24v=178?e24v=178', [])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

}
