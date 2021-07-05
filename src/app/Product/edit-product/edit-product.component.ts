import { Category } from './../../Models/category.model';
import { Router } from '@angular/router';
import { CategoryService } from './../../Category/category.service';
import { ProductService } from './../product.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/Models/product.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor(public productService: ProductService, public categoryService: CategoryService , private router:Router) { }
  editClickedFromEdit : any ;
  allCategories : Category[];
  ngOnInit(): void {
    this.getAllCategories();
  }

  editProduct(product:Product){
    console.log(product);
    this.productService.updateProduct(product).subscribe();
    this.editClickedFromEdit=Math.random();
  }
  getAllCategories(){
    this.categoryService.getAllCategories().subscribe(
      (data: Category[]) => {
        this.allCategories = data['hydra:member'];
        console.table(this.allCategories);
      });
  }

}
