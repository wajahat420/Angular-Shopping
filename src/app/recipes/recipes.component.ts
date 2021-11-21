import { Component } from "@angular/core";

@Component({
    selector:'app-recipes',
    templateUrl:'./recipes.component.html',
    styleUrls:['./recipes.component.scss']
})

export class Recipes{
    recipes = [
        {id:1, name:'Apples', description:'An apple a day keeps the doctor away', ingredients:[], imgURL:'../../assets/react-libraries.png'},
        {id:2, name:'Mangoes', description:'King of Fruits', ingredients:[], imgURL:'../../assets/react-libraries.png'},
        {id:3, name:'Tomatoes', description:'Mostly using items', ingredients:[], imgURL:'../../assets/react-libraries.png'},
    ]
}