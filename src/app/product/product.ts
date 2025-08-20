import { Component } from '@angular/core';
import { Router,RouterLink } from '@angular/router';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-product',
  imports: [ProductList],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {

}
