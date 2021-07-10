import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service' ;
import { Event } from 'src/app/Models/event.model';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user.model';

@Component({
  selector: 'app-show-events',
  templateUrl: './show-events.component.html',
  styleUrls: ['./show-events.component.css']
})
export class ShowEventsComponent implements OnInit {
  
  eventList: Event[]=[] ;
  eventId = 0;
  constructor(private eventsService: EventsService, private router:Router) { }
  currentUser = new User();
  user : User
  ngOnInit(): void  {
    this.getAllEvents();
    this.currentUser.status = "ADMIN"
    this.currentUser.id = 2
    sessionStorage.setItem('userDetails', JSON.stringify(this.currentUser));
  };

  getAllEvents() {
    this.eventsService.getAllEvents().subscribe( data => 
      { this.eventList = data['hydra:member'];
      console.log(this.eventList);
  });
    }

  deleteEvent(id: number) {
    this.eventsService.deleteEvent(id).subscribe(
      (data) => {
        this.getAllEvents();
      });
  }
  updateEvent(event: Event) {
    this.eventsService.newEvent= Object.assign({}, event);
  }

}
