import { AddProductComponent } from './Product/add-product/add-product.component';
import { AddEventComponent } from './Event/add-event/add-event.component';
import { AddCommentComponent } from './comment/add-comment/add-comment.component';
import { ShowProductsComponent } from './Product/show-products/show-products.component';
import { EditEventComponent } from './Event/edit-event/edit-event.component';
import { EditCommentComponent } from './comment/edit-comment/edit-comment.component';
import { ShowInscriptioneventComponent } from './inscriptionevent/show-inscriptionevent/show-inscriptionevent.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowEventsComponent } from './Event/show-events/show-events.component';
import { ShowCommentComponent } from './comment/show-comment/show-comment.component';
import { ShowUsersComponent } from './User/show-users/show-users.component';
import { AddUserComponent } from './User/add-user/add-user.component';
import { DeleteUserComponent } from './User/delete-user/delete-user.component';
import { ShowStoresComponent } from './Store/show-stores/show-stores.component';
import { AddStoresComponent } from './Store/add-stores/add-stores.component';
const routes: Routes = [

  { path: 'showEvents', component: ShowEventsComponent },
  { path: 'editEvent', component: EditEventComponent },
  { path: 'showinscriptionevent', component: ShowInscriptioneventComponent },
  { path: 'editComment', component: EditCommentComponent },
  { path: 'showComments', component: ShowCommentComponent},
  { path: 'addEvents', component: AddEventComponent },
  { path: 'addComment', component: AddCommentComponent },
  { path: 'showUsers', component: ShowUsersComponent },
  { path: 'showProducts', component: ShowProductsComponent },
  { path: 'addProduct', component: AddProductComponent },
  { path: 'addUser', component: AddUserComponent },
  { path: 'deleteUser', component: DeleteUserComponent },
  { path: 'showStores', component: ShowStoresComponent },
  { path: 'AddStore', component: AddStoresComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
