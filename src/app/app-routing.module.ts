import { AddProductComponent } from './Product/add-product/add-product.component';
import { AddEventComponent } from './Event/add-event/add-event.component';
import { ShowProductsComponent } from './Product/show-products/show-products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowEventsComponent } from './Event/show-events/show-events.component';
import { ShowCommentComponent } from './comment/show-comment/show-comment.component';
import { ShowUsersComponent } from './User/show-users/show-users.component';
import { AddUserComponent } from './User/add-user/add-user.component';
import { DeleteUserComponent } from './User/delete-user/delete-user.component';
import { ShowStoresComponent } from './Store/show-stores/show-stores.component';
import { AddStoresComponent } from './Store/add-stores/add-stores.component';
import { EditUserComponent } from './User/edit-user/edit-user.component';
import { EditStoreComponent } from './Store/edit-store/edit-store.component';

const routes: Routes = [
  { path: 'showEvents', component: ShowEventsComponent },
  { path: 'showComments', component: ShowCommentComponent},
  { path: 'addEvents', component: AddEventComponent },
  { path: 'showUsers', component: ShowUsersComponent },
  { path: 'showProducts', component: ShowProductsComponent },
  { path: 'addProduct', component: AddProductComponent },
  { path: 'addUser', component: AddUserComponent },
  { path: 'deleteUser', component: DeleteUserComponent },
  { path: 'showStores', component: ShowStoresComponent },
  { path: 'AddStore', component: AddStoresComponent },
  { path: 'EditUser', component: EditUserComponent },
  { path: 'EditStore', component: EditStoreComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
