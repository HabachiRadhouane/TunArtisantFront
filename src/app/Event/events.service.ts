import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from './event';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private httpClient: HttpClient) {}
  eventtUrl:string =  'http://127.0.0.1:8000/api/events';
  getAllEvents(): Observable<Event[]>{
    return this.httpClient.get<Event[]>(this.eventtUrl); 
  }
}
