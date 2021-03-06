import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Input() allRecipes: Array<Recipe> = [];
  @Output() clicked: EventEmitter<Recipe> = new EventEmitter
  clickedIndex:number = -1

  constructor() { }
        
  ngOnInit(): void {
    console.log('RECIPE LIST', this.allRecipes)
  }

  clickedRecipe(index:number){
    this.clickedIndex = index
    this.clicked.emit(this.allRecipes[this.clickedIndex])
  }
}
