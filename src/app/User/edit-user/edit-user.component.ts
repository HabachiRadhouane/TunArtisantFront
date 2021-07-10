import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from 'src/app/Models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userList: User[]=[] ;
  constructor(public UserService: UsersService, private router:Router) { }
  selectedRole:Array<any> ;

  roles:any[]= [
    {code:'ADMIN',role:'ADMIN'},
    {code:'ARTISAN',role:'ARTISAN'},
    {code:'USER',role:'USER'},
  ];

  ngOnInit(): void {
  }
 
  updateUser(id:number,user: User) {
    console.log(user);
    this.UserService.updateUser(user).subscribe(
    );
  }

  choice(code){
    this.selectedRole=code;
  }

}
