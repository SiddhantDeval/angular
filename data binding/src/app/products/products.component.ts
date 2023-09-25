import { Component } from '@angular/core';
import { Product } from './mock-data';
import dummyProducts from './mock-data.json';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products: Product[] = dummyProducts;
  selectedProduct: Product;
}
