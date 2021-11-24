import { Component } from "@angular/core";
import { Recipe } from "../models/recipe.model";

@Component({
    selector:'app-recipes',
    templateUrl:'./recipes.component.html',
    styleUrls:['./recipes.component.scss']
})

export class Recipes{
    recipes = [
        {id:1, name:'Apples', description:'An apple a day keeps the doctor away', ingredients:[{id:1, name:"Spaghetti", amount:100},{id:2, name:"Sauce", amount:200}], imgURL:'../../assets/react-libraries.png'},
        {id:2, name:'Mangoes', description:'King of Fruits', ingredients:[], imgURL:'../../assets/react-libraries.png'},
        {id:3, name:'Tomatoes', description:'Mostly using items', ingredients:[], imgURL:'../../assets/react-libraries.png'},
    ]
    clickedRecipe:Recipe = {
        id: 0,
        name: "",
        description: "",
        imgURL: "",
        ingredients: []
    }


}