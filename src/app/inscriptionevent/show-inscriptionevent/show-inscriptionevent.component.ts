import { Component, OnInit } from '@angular/core';
import { InscriptioneventService } from '../inscriptionevent.service' ;
import { Inscriptionevent } from 'src/app/Models/inscriptionevent.model';
import { User } from 'src/app/Models/user.model';
import { Event } from 'src/app/Models/event.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from 'src/app/Event/events.service';
@Component({
  selector: 'app-show-inscriptionevent',
  templateUrl: './show-inscriptionevent.component.html',
  styleUrls: ['./show-inscriptionevent.component.css']
})
export class ShowInscriptioneventComponent implements OnInit {

  currentEvent : Event = new Event();
  newinscriptionevent : Inscriptionevent =  new Inscriptionevent();
  currentUser = new User();
  id
  inscriptioneventList: Inscriptionevent[]=[] ;
  inscriptioneventId = 0;
  constructor(
    private inscriptioneventService: InscriptioneventService, 
    private router:Router,
    private eventService : EventsService,
    private activatedRoute:ActivatedRoute,
    private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id
    console.log(this.id)
    this.currentUser = JSON.parse(sessionStorage.getItem("userDetails")) as User;
    this.eventService.getEventById(this.id).subscribe(
      (data)=> {
        this.currentEvent = data ;
        // console.log(this.currentEvent)
        this.currentEvent.inscriptions.forEach(inscriptionevent => {
          console.log(new String(inscriptionevent).split("/")[3])
          this.inscriptioneventService.getByInscriptioneventId(new String(inscriptionevent).split("/")[3]).subscribe(
            (inscriptioneventData)=> {
              this.inscriptioneventList.push(inscriptioneventData);
            }
          )
        });
      });
    //this.getAllInscriptionevents();
  }
  deleteInsciptionevent(inscriptionevent){
    this.inscriptioneventService.deleteInscriptionevent(inscriptionevent.id).subscribe();
    this.inscriptioneventList.forEach((element,index)=>{
      if(element.id==inscriptionevent.id){
        this.inscriptioneventList.splice(index,1)
      }
    });
  }

  updateInscriptionevent(inscriptionevent: Inscriptionevent) {
    this.inscriptioneventService.newinscriptionevent= Object.assign({}, inscriptionevent);
  }

  /*getAllInscriptionevents() {
    this.inscriptioneventService.getAllInscriptionevents().subscribe( data => 
      { this.inscriptioneventList = data['hydra:member'];
      console.log(this.inscriptioneventList);
  });
    }*/
}
