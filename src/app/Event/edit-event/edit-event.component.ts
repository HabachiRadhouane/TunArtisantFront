import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service' ;
import { Event } from 'src/app/Models/event.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  constructor(public eventsService: EventsService, private router:Router) { }

  ngOnInit(): void {
  }


  updateEvent(id:number,event: Event) {
    console.log(event);
    this.eventsService.updateEvent(event).subscribe(
    );
  }
}
