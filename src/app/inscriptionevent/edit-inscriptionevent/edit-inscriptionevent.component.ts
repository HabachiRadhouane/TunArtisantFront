import { Component, OnInit } from '@angular/core';
import { InscriptioneventService } from '../inscriptionevent.service' ;
import { Inscriptionevent } from 'src/app/Models/inscriptionevent.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-inscriptionevent',
  templateUrl: './edit-inscriptionevent.component.html',
  styleUrls: ['./edit-inscriptionevent.component.css']
})
export class EditInscriptioneventComponent implements OnInit {

  constructor(public inscriptioneventService: InscriptioneventService, private router:Router) { }
  inscriptioneventList: Inscriptionevent[]=[] ;
  inscriptionevent : Inscriptionevent = new Inscriptionevent();
  ngOnInit(): void {
  }

  updateInscriptionevent(id:number,inscriptionevent:Inscriptionevent) {
    console.log(inscriptionevent);
    this.inscriptionevent.state = "Accepted"
    this.inscriptioneventService.updateInscriptionevent(inscriptionevent).subscribe(
    );
  }
}
