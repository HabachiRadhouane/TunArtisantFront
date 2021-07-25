import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser 
  Role

<<<<<<< HEAD
  constructor(public LoginService: LoginService) { }
=======
  constructor(private router:Router) { }
>>>>>>> 7a048396dcc61ebcbc9233b581547d4386b0b4d0

  ngOnInit(): void {
    this.currentUser= JSON.parse(localStorage.getItem('user'));
    console.log(this.currentUser.username);  
    this.Role= localStorage.getItem('roles');
    console.log(this.Role);  
  }

  logout(){

    this.LoginService.logout();
  }

}
