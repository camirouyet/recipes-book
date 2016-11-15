import { Component, OnInit, OnDestroy, Directive } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe';

@Component({
  selector: 'rb-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styles:['img{max-width:200px}']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  recipeForm: FormGroup;
  private subscription: Subscription;
  private recipeIndex: number;
  private isNew = true;
  private recipe: Recipe;
  constructor(private route: ActivatedRoute, 
              private recipeService: RecipeService,
              private formBuider: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if(params.hasOwnProperty('id')){
          this.isNew = false;
          this.recipeIndex = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.recipeIndex);        
        }else{
           this.isNew = true;
           this.recipe = null;
        }
        this.initForm();
      }
    );
  }

  onSubmit(){
    const newRecipe = this.recipeForm.value;
    if(this.isNew){
      this.recipeService.addRecipe(newRecipe);
    }else{
      this.recipeService.editRecipe(this.recipe, newRecipe);
    }
    this.navigateBack();
  }

  onCancel(){
    this.navigateBack();
  }

  onAddItem(name: string, amount: string){
    (<FormArray>this.recipeForm.controls['ingredients']).push(
      new FormGroup({
           name: new FormControl(name, Validators.required),
           amount: new FormControl(amount, [
                Validators.required,
                Validators.pattern('\\d+')
              ])
      })
    );
  }

  onRemoveItem(index: number){
    (<FormArray>this.recipeForm.controls['ingredients']).removeAt(index);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  private navigateBack(){
    this.router.navigate(['../']);
  }

  private initForm(){
    let recipeName = '';
    let recipeImage ='';
    let recipeContent = '';
    let recipeIngredients: FormArray = new FormArray([]);

    if(!this.isNew){
      if(this.recipe.hasOwnProperty('ingredients')){
        for(let i = 0;i < this.recipe.ingredients.length; i++){
          recipeIngredients.push(
            new FormGroup({
            name: new FormControl(this.recipe.ingredients[i].name, Validators.required),
            amount:new FormControl(this.recipe.ingredients[i].amount, [
                  Validators.required,
                  Validators.pattern('\\d+')
                ])
            })
          );
        }
      }
    
      recipeName = this.recipe.name;
      recipeImage = this.recipe.imagePath;
      recipeContent = this.recipe.description;
    }
  
    this.recipeForm = this.formBuider.group({
      name: [recipeName, Validators.required],
      imagePath: [recipeImage, Validators.required],
      description: [recipeContent, Validators.required],
      ingredients: recipeIngredients
     });
  }

}
