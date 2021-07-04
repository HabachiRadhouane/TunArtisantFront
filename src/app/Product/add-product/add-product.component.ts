import { CategoryService } from './../../Category/category.service';
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
  constructor(public productService: ProductService, public categoryService: CategoryService , private router:Router) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories();
  }
  addProduct(product: Product) {
    console.log(product);
    this.productService.addProduct(product).subscribe();
  }

}
