import { EditProductComponent } from './Product/edit-product/edit-product.component';
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
import { EditUserComponent } from './User/edit-user/edit-user.component';
import { EditStoreComponent } from './Store/edit-store/edit-store.component';
import { EventDetailsComponent } from './Event/event-details/event-details.component';
import { ProductDetailsComponent } from './Product/product-details/product-details.component';
import { EditInscriptioneventComponent } from './inscriptionevent/edit-inscriptionevent/edit-inscriptionevent.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './Login/login/login.component';
import { HeaderstoreComponent } from './Store/headerstore/headerstore.component';
import { StoreDetailsComponent} from './Store/store-details/store-details.component';


const routes: Routes = [
  
  { path: 'editInscriptionevent', component: EditInscriptioneventComponent},
  { path: 'showEvents', component: ShowEventsComponent },
  { path: 'editEvent', component: EditEventComponent },
  { path: 'eventDetails/:id', component: EventDetailsComponent },
  { path: 'editComment', component: EditCommentComponent },
  { path: 'showComments', component: ShowCommentComponent},
  { path: 'addEvents', component: AddEventComponent },
  { path: 'addComment', component: AddCommentComponent },
  { path: 'showUsers', component: ShowUsersComponent },
  { path: 'showProducts', component: ShowProductsComponent },
  { path: 'addProduct', component: AddProductComponent },
  { path: 'editProduct/:id', component: EditProductComponent },
  { path: 'addUser', component: AddUserComponent },
  { path: 'DashboardUser', component: DeleteUserComponent },
  { path: 'showStores', component: ShowStoresComponent },
  { path: 'AddStore', component: AddStoresComponent },
  { path: 'productDetails/:id', component: ProductDetailsComponent },
  { path: 'EditUser', component: EditUserComponent },
  { path: 'EditStore', component: EditStoreComponent },
  { path: 'LoginComponent', component: LoginComponent },
  { path: 'showComments/:id', component: ShowCommentComponent},
  { path: 'showinscriptionevent/:id', component: ShowInscriptioneventComponent },
  { path: 'EditStore/:id', component: EditStoreComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'headerstore', component: HeaderstoreComponent },
  { path: 'StoreDetails/:id', component: StoreDetailsComponent },
  { path: 'showComments/:id', component: ShowCommentComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
