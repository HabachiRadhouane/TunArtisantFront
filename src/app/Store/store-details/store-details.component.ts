import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from './../store.service';
import { Product } from 'src/app/Models/product.model';
import { Store } from 'src/app/Models/store.model';
import { User } from 'src/app/Models/user.model';
import { ProductService } from 'src/app/Product/product.service';
import { UsersService } from 'src/app/User/users.service';

@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.css']
})
export class StoreDetailsComponent implements OnInit {
  productList: Product[]=[] ;
  product : Product = new Product();
  storeList: Store[]=[] ;
  store : Store = new Store();
  UserList: User[]=[] ;
  user : User = new User();
  id;
  username;
  currentUser : User;

  constructor(public storeService: StoreService ,public userService: UsersService,public productService: ProductService, private router:Router,private activatedRoute:ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit(): void {
    // this.currentUser = JSON.parse(sessionStorage.getItem("userDetails")) as User;
    // console.log(this.currentUser);
     this.id = this.activatedRoute.snapshot.params.id
     console.log(this.id)
     this.getStoreById(this.id)
    this.getProducts()
    console.log(this.username)
    this.getUserByUsername(this.username)
    this.getAllUsers()
    // console.log(this.getProducts())
  }
  getStoreById(id){
    return this.httpClient.get<Store>(this.storeService.usertUrl+"api/stores/"+id).subscribe(
      (data)=> {
        this.store = data ;
      }
    );
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe( data => 
      { this.UserList = data['hydra:member'];
      console.log(this.UserList);
  });
    }



  getUserByUsername(username){
    return this.httpClient.get<User>(this.userService.usertUrl+"api/users"+username);
   }



  getProducts(){
    this.productService.getAllProducts().subscribe(
      (data: Product[]) => {
        this.productList = data['hydra:member'];
        console.table(this.productList);
      });
  }

}
