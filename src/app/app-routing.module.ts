import { AddProductComponent } from './Product/add-product/add-product.component';
import { AddEventComponent } from './Event/add-event/add-event.component';
import { ShowProductsComponent } from './Product/show-products/show-products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowEventsComponent } from './Event/show-events/show-events.component';
import { ShowCommentComponent } from './comment/show-comment/show-comment.component';
import { ShowUsersComponent } from './User/show-users/show-users.component';


const routes: Routes = [

  { path: 'showEvents', component: ShowEventsComponent },
  { path: 'showComments', component: ShowCommentComponent},
  { path: 'addEvents', component: AddEventComponent },
  { path: 'showUsers', component: ShowUsersComponent },
  { path: 'showProducts', component: ShowProductsComponent },
  { path: 'addProduct', component: AddProductComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
