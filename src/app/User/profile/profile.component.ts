import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/User/users.service';
import { User } from 'src/app/Models/user.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from 'src/app/Store/store.service';
import { Store } from 'src/app/Models/store.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userList: User[]=[] ;
  newUser : User = new User();
  currentUser 
  Role
  selectedRole:Array<any> ;

  roles:any[]= [
    {code:'ADMIN',role:'ADMIN'},
    {code:'ARTISAN',role:'ARTISAN'},
    {code:'USER',role:'USER'},
  ];

  constructor(public UserService: UsersService, private formBuilder: FormBuilder, private router:Router,private activatedRoute:ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getAllUsers();
    this.currentUser= JSON.parse(localStorage.getItem('user'));
    console.log(this.currentUser.email); 
  
    this.Role= localStorage.getItem('roles');
    console.log(this.Role);  

  }

  getAllUsers() {
    this.UserService.getAllUsers().subscribe( data => 
      { this.userList = data['hydra:member'];
      console.log(this.userList);
  });
    }

    updateUser(id:number,user: User) {
      console.log(user);
      this.UserService.updateUser(user).subscribe(
      );
    }
  
    editUser(res: User) {
      this.UserService.newUser= Object.assign({}, res);
    }
    
    choice(code){
      this.selectedRole=code;
    }

}
