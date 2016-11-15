import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';

import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { RecipesModule } from './recipes/recipes.module';

import { HighlightDirectiveDirective } from './highlight-directive.directive';
import { DropdownDirective } from './dropdown.directive';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RecipesModule,
    ShoppingListModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    HighlightDirectiveDirective,
    DropdownDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
