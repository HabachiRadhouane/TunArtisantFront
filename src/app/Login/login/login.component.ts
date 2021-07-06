import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service' ;
import { Event } from 'src/app/Models/event.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public LoginService: LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  getlogin(email,password){
    this.LoginService.getAllLogin(email,password).subscribe();
  }

}
