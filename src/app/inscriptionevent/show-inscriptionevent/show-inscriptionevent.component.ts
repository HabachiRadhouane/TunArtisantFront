import { Component, OnInit } from '@angular/core';
import { InscriptioneventService } from '../inscriptionevent.service' ;
import { Inscriptionevent } from 'src/app/Models/inscriptionevent.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-inscriptionevent',
  templateUrl: './show-inscriptionevent.component.html',
  styleUrls: ['./show-inscriptionevent.component.css']
})
export class ShowInscriptioneventComponent implements OnInit {

  inscriptioneventList: Inscriptionevent[]=[] ;
  inscriptioneventId = 0;
  constructor(private inscriptioneventService: InscriptioneventService, private router:Router) { }

  ngOnInit(): void {
    this.getAllInscriptionevents();
  }

  getAllInscriptionevents() {
    this.inscriptioneventService.getAllInscriptionevents().subscribe( data => 
      { this.inscriptioneventList = data['hydra:member'];
      console.log(this.inscriptioneventList);
  });
    }
}
