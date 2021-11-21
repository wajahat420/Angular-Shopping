import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  @Input() recipeItem!: Recipe;
  @Input() active:boolean = false
  @Output() clicked : EventEmitter<string> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

}
