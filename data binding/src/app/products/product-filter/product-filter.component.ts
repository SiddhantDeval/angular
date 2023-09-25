import { Component, Input } from '@angular/core';
import { Product } from '../mock-data';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css'],
})
export class ProductFilterComponent {
  @Input()
  products: Product[];

  selectedPrice: any;
  maxPrice: number;
  minPrice: number;
  ngOnInit() {
    this.maxPrice = Math.max(...this.products.map((p) => p.price));
    this.minPrice = Math.min(...this.products.map((p) => p.price));
  }
  handlePriceFilter(element: HTMLInputElement) {
    //refernece variable
    this.selectedPrice = element.value;
  }
}
