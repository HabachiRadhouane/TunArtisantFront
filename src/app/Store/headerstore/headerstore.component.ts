import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Login/login.service';

@Component({
  selector: 'app-headerstore',
  templateUrl: './headerstore.component.html',
  styleUrls: ['./headerstore.component.css']
})
export class HeaderstoreComponent implements OnInit {
  currentUser 
  Role

  constructor(public LoginService: LoginService) { }

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
