import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Models/product.model';
import { Store } from 'src/app/Models/store.model';
import { User } from 'src/app/Models/user.model';
import { ProductService } from 'src/app/Product/product.service';
import { UsersService } from 'src/app/User/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  productList: Product[]=[] ;
  product : Product = new Product();
  storeList: Store[]=[] ;
  store : Store = new Store();
  UserList: User[]=[] ;
  user : User = new User();
  id;
  username;
  currentUser : User;
  constructor(public userService: UsersService, private router:Router,private activatedRoute:ActivatedRoute, private httpClient: HttpClient) { }
  selectedRole:Array<any> ;
  userList: User[]=[] ;
  newUser : User = new User();

  //roles = ['ADMIN', 'ARTISAN','USER'];
  roles:any[]= [
    {code:'ADMIN',role:'ADMIN'},
    {code:'ARTISAN',role:'ARTISAN'},
    {code:'USER',role:'USER'},
  ];
  ngOnInit(): void {
    this.getAllUsers();
    this.id = this.activatedRoute.snapshot.params.id
    console.log(this.id)
  }

  addUser(user: User) {
    console.log(user);
    this.userService.addUser(user).subscribe();
  }
  choice(code){
    console.log(code);
    this.selectedRole=code;
  }
  getAllUsers() {
    this.userService.getAllUsers().subscribe( data => 
      { this.userList = data['hydra:member'];
      console.log(this.userList);
  });
    }


}
