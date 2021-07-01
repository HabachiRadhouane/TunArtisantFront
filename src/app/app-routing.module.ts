import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowEventsComponent } from './Event/show-events/show-events.component';


const routes: Routes = [
  
  { path: 'showEvents', component: ShowEventsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
