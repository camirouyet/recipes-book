import { NgModule }     from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { RecipesRoutingModule } from './recipes/recipes-routing';
import { ShoppingListRoutingModule } from './shopping-list/shopping-list-routing';


@NgModule({
  imports: [
    RouterModule.forRoot([])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
