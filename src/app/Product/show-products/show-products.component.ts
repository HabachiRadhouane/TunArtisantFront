import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {
  productList: Product[]=[] ;
  constructor(private productService: ProductService, private router:Router) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe( data =>
      {
        this.productList = data['hydra:member'];
        console.log(this.productList);
      });
  }

}
