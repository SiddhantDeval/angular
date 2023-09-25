import { Component, Input } from '@angular/core';
import { Product } from '../mock-data';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  @Input()
  products: Product[];
  selectedProduct: Product;
}
