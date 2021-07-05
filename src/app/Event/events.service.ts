import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from './../Models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private httpClient: HttpClient) {}
  eventtUrl:string =  'http://127.0.0.1:8000/api/events';

  newEvent: Event = {
    
    id: null,
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    location: '',
    type: '',
    inscriptions: [],
    comments: []
  }

  getAllEvents(): Observable<Event[]>{
    return this.httpClient.get<Event[]>(this.eventtUrl); 
  }
  addEvent(event: Event): Observable<Event> {
    return this.httpClient.post<Event>(this.eventtUrl, event);
  }
  deleteEvent(id:Number){
    return this.httpClient.delete(this.eventtUrl+'/'+id)
  }
  updateEvent(event: Event): Observable<Event> {
    return this.httpClient.put<Event>(this.eventtUrl+'/'+event.id, event);
  }
}
