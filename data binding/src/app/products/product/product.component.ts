import { Component, Input } from '@angular/core';
import { Product } from '../mock-data';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input()
  product: Product;
  ngOnInit() {
    console.log(this.product);
  }
}
