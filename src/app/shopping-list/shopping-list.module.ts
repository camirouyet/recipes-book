import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { ShoppingListRoutingModule } from './shopping-list-routing';

import { ShoppingListService } from './shopping-list.service';
import { ShoppingListAddComponent } from './shopping-list-add.component';
import { ShoppingListComponent } from './shopping-list.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ShoppingListRoutingModule
  ],
  declarations: [
    ShoppingListComponent,
    ShoppingListAddComponent
  ],
  providers: [
    ShoppingListService
  ]
})
export class ShoppingListModule {}
