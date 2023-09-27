import { Component, ViewChild } from '@angular/core';
import { Product } from './mock-data';
import dummyProducts from './mock-data.json';
import { ProductFilterComponent } from './product-filter/product-filter.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products: Product[] = dummyProducts;
  selectedProduct: Product;

  /* todo @ViewChild('ProductListComponentReference')
   Access reference from ProductFilter Component via @ViewChild decoretor
   @ViewChild('ProductListComponentReference') 
   OR
   @ViewChild(ProductFilterComponent)
  */
  @ViewChild(ProductFilterComponent)
  ProductFilterComp: ProductFilterComponent;
}
