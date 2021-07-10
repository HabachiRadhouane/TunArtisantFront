import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from './../events.service';
import { Event } from 'src/app/Models/event.model';
import { Inscriptionevent } from 'src/app/Models/inscriptionevent.model';
import { InscriptioneventService } from 'src/app/inscriptionevent/inscriptionevent.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  eventList: Event[]=[] ;
  event : Event = new Event();
  id;
  currentUser : User;
  newInscriptionEvent : Inscriptionevent = new Inscriptionevent();
  constructor(
    public eventsService: EventsService, 
    public inscriptioneventservice: InscriptioneventService,
     private router:Router,
     private activatedRoute:ActivatedRoute, 
     private httpClient: HttpClient
     ) { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(sessionStorage.getItem("userDetails")) as User;
    console.log(this.currentUser);
    this.id = this.activatedRoute.snapshot.params.id
    // console.log(this.id)
    this.getEventById(this.id)
  }

  getEventById(id){
    return this.httpClient.get<Event>(this.eventsService.eventtUrl+"/"+id).subscribe(
      (data)=> {
        console.log("aaaaaaaaaaa3");
        this.event = data ;
      }
    );
  }

  addInscriptionevent(){
      this.newInscriptionEvent.event = "/api/events/"+this.id ;
      this.newInscriptionEvent.user = "/api/users/"+this.currentUser.id ;
      this.newInscriptionEvent.state = "unconfirmed"
      this.newInscriptionEvent.createdAt="2021-07-08T22:34:53.908Z"
      this.newInscriptionEvent.updatedAt="2021-07-08T22:34:53.908Z"
      console.log(this.newInscriptionEvent);
      this.inscriptioneventservice.addInscriptionevent(this.newInscriptionEvent).subscribe();

  }

}
