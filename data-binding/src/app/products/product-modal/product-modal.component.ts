import { Component, Input } from '@angular/core';
import { Product } from '../mock-data';

@Component({
  selector: 'product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css'],
})
export class ProductModalComponent {
  @Input()
  product: Product;
}
