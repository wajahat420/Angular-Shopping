import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Recipes } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeComponent } from './recipes/recipe/recipe.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component';
import { NewRecipeComponent } from './recipes/new-recipe/new-recipe.component';
import { IngredientsListComponent } from './recipes/ingredients-list/ingredients-list.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './shopping-list/list/list.component';
import { ShoppingList } from './shopping-list/shopping-list.component';
import { ButtonComponent } from './shared/button/button.component';
import { BgColor } from './directives/bg-color.directive';
// import {ToggleBgColor} from "./directives/bg-color.directive"

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeComponent,
    RecipeDetailComponent,
    EditRecipeComponent,
    NewRecipeComponent,
    IngredientsListComponent,
    HeaderComponent,
    Recipes,
    ListComponent,
    ShoppingList,
    ButtonComponent,
    BgColor,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
