import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeData!:Recipe
  show = false
  constructor() { }

  ngOnInit(): void {
    console.log('RECIPE DATA IN RecipeDetailComponent', this.recipeData)
  }

}
