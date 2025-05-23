import { PaginationComponent } from './../pagination/pagination.component';
import { Component, input, Input } from '@angular/core';

import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-card-list',
  imports: [PaginationComponent, ProductCardComponent],
  templateUrl: './product-card-list.component.html',
  styleUrl: './product-card-list.component.scss',
})
export class ProductCardListComponent {
  readonly products = input<Product[]>([]);

  pageIndex = 1;
}
