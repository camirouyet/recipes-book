import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { RecipesRoutingModule } from './recipes-routing';

import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start.component';
import { RecipeService } from './recipe.service';

 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RecipesRoutingModule
  ],
  declarations: [
    RecipesComponent, 
    RecipeListComponent,
    RecipeStartComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeEditComponent
  ],
  providers: [
    RecipeService
  ]
})
export class RecipesModule {}
