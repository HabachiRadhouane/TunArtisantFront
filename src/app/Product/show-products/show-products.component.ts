import { User } from './../../Models/user.model';
import { Router } from '@angular/router';
import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from 'src/app/Models/product.model';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit, OnChanges {
  data;
  productList: Product[]=[] ;
  constructor(public productService: ProductService, private router:Router) { }
  @Input() editClickedInput : any

  currentUser = new User();
  user : User
  ngOnInit(): void {
    this.getAllProducts();
    this.currentUser.id = 11;
    this.currentUser.email="priest123@hotmail.fr"
    this.currentUser.username="habachiradhouane@gmail.com"
    this.currentUser.password="aaaa"
    this.currentUser.status = "ADMIN"

    sessionStorage.setItem('userDetails', JSON.stringify(this.currentUser));
    // this.user = JSON.parse(sessionStorage.getItem("userDetails")) as User;
    // console.log(this.user);
  }

  getAllProducts(){
    this.productService.getAllProducts().subscribe(
      (data: Product[]) => {
        this.productList = data['hydra:member'];
        console.table(this.productList);
      });
  }
  deleteProduct(id:number){
    this.productService.deleteProduct(id).subscribe(
      () => {
        this.getAllProducts();
      });
  }

  editProduct(product: Product) {
    this.productService.currentProduct = Object.assign({}, product);
    this.productService.currentProduct.category= product.category['@id'] ;
  }
  ngOnChanges(changes:SimpleChanges){
    console.log(changes);
    if(changes['editClickedInput'].firstChange||changes['editClickedInput'].previousValue!=changes['editClickedInput'].currentValue){
      this.getAllProducts();
    }
  }

}
