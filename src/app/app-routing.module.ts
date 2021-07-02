import { ShowProductsComponent } from './Product/show-products/show-products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowEventsComponent } from './Event/show-events/show-events.component';
import { ShowUsersComponent } from './User/show-users/show-users.component';


const routes: Routes = [

  { path: 'showEvents', component: ShowEventsComponent },
  { path: 'showUsers', component: ShowUsersComponent },
  { path: 'showProducts', component: ShowProductsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
