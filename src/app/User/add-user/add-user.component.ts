import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user.model';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(public userService: UsersService, private router:Router) { }
  selectedRole:Array<any> ;

  //roles = ['ADMIN', 'ARTISAN','USER'];
  roles:any[]= [
    {code:'ADMIN',role:'ADMIN'},
    {code:'ARTISAN',role:'ARTISAN'},
    {code:'USER',role:'USER'},
  ];
  ngOnInit(): void {
  }

  addUser(user: User) {
    console.log(user);
    this.userService.addUser(user).subscribe();
  }
  choice(code){
    console.log(code);
    this.selectedRole=code;
  }


}
