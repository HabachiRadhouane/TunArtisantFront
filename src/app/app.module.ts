import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowEventsComponent } from './Event/show-events/show-events.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowUsersComponent } from './User/show-users/show-users.component';
import { ShowProductsComponent } from './Product/show-products/show-products.component';
import { AddProductComponent } from './Product/add-product/add-product.component';
import { AddEventComponent } from './Event/add-event/add-event.component';
import { EditEventComponent } from './Event/edit-event/edit-event.component';
import { ShowCommentComponent } from './comment/show-comment/show-comment.component';
import { ShowInscriptioneventComponent } from './inscriptionevent/show-inscriptionevent/show-inscriptionevent.component';
import { AddUserComponent } from './User/add-user/add-user.component';
import { DeleteUserComponent } from './User/delete-user/delete-user.component';
import { ShowStoresComponent } from './Store/show-stores/show-stores.component';
import { AddStoresComponent } from './Store/add-stores/add-stores.component';
import { AddCommentComponent } from './comment/add-comment/add-comment.component';
import { EditCommentComponent } from './comment/edit-comment/edit-comment.component';
import { EditProductComponent } from './Product/edit-product/edit-product.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailsComponent } from './Product/product-details/product-details.component';
import { EditUserComponent } from './User/edit-user/edit-user.component';
import { EditStoreComponent } from './Store/edit-store/edit-store.component';
import { LoginComponent } from './Login/login/login.component';
import { EventDetailsComponent } from './Event/event-details/event-details.component';
import { DeleteInscriptioneventComponent } from './inscriptionevent/delete-inscriptionevent/delete-inscriptionevent.component';
import { EditInscriptioneventComponent } from './inscriptionevent/edit-inscriptionevent/edit-inscriptionevent.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowEventsComponent,
    ShowUsersComponent,
    ShowProductsComponent,
    AddProductComponent,
    AddEventComponent,
    EditEventComponent,
    ShowCommentComponent,
    ShowInscriptioneventComponent,
    AddUserComponent,
    DeleteUserComponent,
    ShowStoresComponent,
    AddStoresComponent,
    AddCommentComponent,
    EditCommentComponent,
    EditCommentComponent,
    AddCommentComponent,
    EditProductComponent,
    HeaderComponent,
    FooterComponent,
    ProductDetailsComponent,
    EditStoreComponent,
    EditUserComponent,
    EditUserComponent,
    EditStoreComponent,
    LoginComponent,
    EventDetailsComponent,
    DeleteInscriptioneventComponent,
    EditInscriptioneventComponent




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
