import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';
import { Headers, Http, Response } from '@angular/http';

@Injectable()
export class RecipeService {
  recipesChanged = new EventEmitter<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Dummy1','Dummy1 Description','http://i.ebayimg.com/00/s/MTA2MlgxNjAw/z/LN8AAOSwstxVYvZC/$_32.JPG',[
      new Ingredient('Papas Fritas', 2), 
      new Ingredient('Mila  napo', 1),  
    ]),
    new Recipe('Dummy2','Dummy2 Description','http://i.ebayimg.com/00/s/MTA2MlgxNjAw/z/LN8AAOSwstxVYvZC/$_32.JPG', [])
  ];
    
  constructor(private http: Http) { }

  getRecipes(){
    return this.recipes;
  }

  getRecipe( id: number){
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
  }

  editRecipe(recipe: Recipe, newRecipe: Recipe){
    this.recipes[this.recipes.indexOf(recipe)] = newRecipe;
  }

  storeData(){
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://recipebook-d9365.firebaseio.com/recipes.json', body, {headers: headers});
  }

  fetchData(){
    return this.http.get('https://recipebook-d9365.firebaseio.com/recipes.json')
        .map((response: Response) => response.json()).subscribe(
          (data: Recipe[] ) => {
            this.recipes = data
            this.recipesChanged.emit(this.recipes)
          }
        )   
  
  }

}
