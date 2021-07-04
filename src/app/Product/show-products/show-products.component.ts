import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from 'src/app/Models/product.model';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {
  data;
  productList: Product[]=[] ;
  constructor(public productService: ProductService, private router:Router) { }

  ngOnInit(): void {
    this.getAllProducts();
    // this.data = this.productService.getProductByID(13);
    // console.log(this.data);
  }

  getAllProducts(){
    this.productService.getAllProducts();
  }
  deleteProduct(id:number){
    this.productService.deleteProduct(id).subscribe(
      () => {
        this.getAllProducts();
      });
  }

}
