import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from './../store.service';
import { Product } from 'src/app/Models/product.model';
import { Store } from 'src/app/Models/store.model';
import { User } from 'src/app/Models/user.model';
import { ProductService } from 'src/app/Product/product.service';

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
  id;
  currentUser : User;

  constructor(public storeService: StoreService,public productService: ProductService, private router:Router,private activatedRoute:ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit(): void {
    // this.currentUser = JSON.parse(sessionStorage.getItem("userDetails")) as User;
    // console.log(this.currentUser);
     this.id = this.activatedRoute.snapshot.params.id
     console.log(this.id)
     this.getStoreById(this.id)
    this.getProducts()
    // console.log(this.getProducts())
  }
  getStoreById(id){
    return this.httpClient.get<Store>(this.storeService.usertUrl+"api/stores/"+id).subscribe(
      (data)=> {
        this.store = data ;
      }
    );
  }


  getProducts(){
    this.productService.getAllProducts().subscribe(
      (data: Product[]) => {
        this.productList = data['hydra:member'];
        console.table(this.productList);
      });
  }

}
