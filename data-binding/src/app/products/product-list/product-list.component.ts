import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { Product } from '../mock-data';
import { ProductFilterComponent } from '../product-filter/product-filter.component';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  @Input()
  products: Product[];
  @Input()
  // viewChild for component, todo ProductFilterComp: ProductFilterComponent;
  selectedProduct: Product;
}
