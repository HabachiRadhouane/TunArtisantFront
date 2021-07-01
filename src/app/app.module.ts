import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowEventsComponent } from './Event/show-events/show-events.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowUsersComponent } from './User/show-users/show-users.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowEventsComponent,
    ShowUsersComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
