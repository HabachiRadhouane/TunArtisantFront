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
  id;
  constructor(public productService: ProductService, private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    console.log(this.id)
    this.getAllProducts();
  }
  getAllProducts(){
    this.productService.getAllProducts().subscribe(
      (data: Product[]) => {
        this.productList = data['hydra:member'];
        console.table(this.productList);
      });
  }
}
