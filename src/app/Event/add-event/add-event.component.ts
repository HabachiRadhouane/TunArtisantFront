import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service' ;
import { Event } from 'src/app/Models/event.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
    constructor(public eventsService: EventsService, private router:Router) { }


  ngOnInit(): void {
  }

  addEvent(event: Event) {
    console.log(event);
    this.eventsService.addEvent(event).subscribe();
  }

}
