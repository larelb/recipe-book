import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Lobster Roll', 'Lobster on a roll', 'http://www.seriouseats.com/images/2016/12/20161208-sous-vide-lobster-59-lobster-roll-duo.jpg', []),
    new Recipe('Spring Roll', 'Chinese spring rolls are good', 'https://eat24hours.com/files/cuisines/v4/thai.jpg?e24v=103?e24v=178?e24v=178', [])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
