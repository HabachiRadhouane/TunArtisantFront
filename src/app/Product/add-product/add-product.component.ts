import { CategoryService } from './../../Category/category.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product.model';
import { ProductService } from '../product.service';
import { Category } from 'src/app/Models/category.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  constructor(public productService: ProductService, public categoryService: CategoryService , private router:Router) { }
  allCategories : Category[];

  newProduct: Product = {
    id: null,
    title: '',
    description: '',
    price: 0,
    quantity: 0,
    category: new Category,
    commands : [],
    store:''
  }
  ngOnInit(): void {
    this.getAllCategories();
  }
  addProduct(product: Product) {
    this.productService.addProduct(product).subscribe();
  }

  getAllCategories(){
    this.categoryService.getAllCategories().subscribe(
      (data: Category[]) => {
        this.allCategories = data['hydra:member'];
        console.table(this.allCategories);
      });
  }

}
