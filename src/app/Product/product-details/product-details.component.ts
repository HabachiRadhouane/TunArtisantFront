import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productList: Product[]=[] ;
  product : Product = new Product();
  id;
  constructor(public productService: ProductService, private router:Router,private activatedRoute:ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id
    console.log(this.id)
    this.getProductById(this.id)
  }
  getProductById(id){
    return this.httpClient.get<Product>(this.productService.baseURL+"api/products/"+id).subscribe(
      (data)=> {
        this.product = data ;
      }
    );
  }
}
