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
<<<<<<< HEAD
import { AddEventComponent } from './Event/add-event/add-event.component';
import { EditEventComponent } from './Event/edit-event/edit-event.component';
import { ShowCommentComponent } from './comment/show-comment/show-comment.component';
import { ShowInscriptioneventComponent } from './inscriptionevent/show-inscriptionevent/show-inscriptionevent.component';
=======
import { AddUserComponent } from './User/add-user/add-user.component';
import { DeleteUserComponent } from './User/delete-user/delete-user.component';
import { ShowStoresComponent } from './Store/show-stores/show-stores.component';
import { AddStoresComponent } from './Store/add-stores/add-stores.component';

>>>>>>> 41554614f942303b86795c7dda033a7776e5eff0


@NgModule({
  declarations: [
    AppComponent,
    ShowEventsComponent,
    ShowUsersComponent,
    ShowProductsComponent,
    AddProductComponent,
<<<<<<< HEAD
    AddEventComponent,
    EditEventComponent,
    ShowCommentComponent,
    ShowInscriptioneventComponent,
    
=======
    AddUserComponent,
    DeleteUserComponent,
    ShowStoresComponent,
    AddStoresComponent

>>>>>>> 41554614f942303b86795c7dda033a7776e5eff0
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
