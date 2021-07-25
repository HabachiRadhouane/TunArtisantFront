import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service' ;
import { Event } from 'src/app/Models/event.model';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/Models/login.model';
import { StoreService } from 'src/app/Store/store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  login : Login = new Login();

  constructor(public LoginService: LoginService,
    private formBuilder: FormBuilder, private router:Router,
    private storeService : StoreService) { }

  ngOnInit(): void {
  }


  getlogin(login: Login) {
    this.LoginService.LoginUsers(login).subscribe(response=>{
      console.log(response);
      if (response) {
        let user = this.LoginService.getUserByEmail(this.LoginService.newLogin.email).subscribe((
          data:any
        ) => {console.log(data.roles[0])
          localStorage.setItem('jwt', JSON.stringify(response));
          localStorage.setItem('roles', data.roles[0]);
          localStorage.setItem('user', JSON.stringify(data));
          console.log(data);
          this.router.navigate(['/showStores'])
        }
        )}}) 
  }

  

}



