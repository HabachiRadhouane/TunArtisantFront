import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  constructor(public productService: ProductService, private router:Router) { }

  ngOnInit(): void {
    // this.productService.addProduct(this.newProduct).subscribe();
  }
  addProduct(product: Product) {
    console.log(product);
    this.productService.addProduct(product).subscribe();
  }

}
