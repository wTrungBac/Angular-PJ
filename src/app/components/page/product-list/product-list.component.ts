import { Component } from '@angular/core';
import { ProductComponent } from '../../shared/product/product.component';
import { ProductImage } from '../../shared/product/product.component';
import { CardComponent } from '../../shared/card/card.component';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [
    {
      productSrc:'./assets/img/items/it_1.jpg',
    },
    {
      productSrc:'./assets/img/items/it_2.webp',
    },
    {
      productSrc:'./assets/img/items/it_3.webp',
    },
    {
      productSrc:'./assets/img/items/it_4.webp',
    },
    {
      productSrc:'./assets/img/items/it_5.webp',
    },
    {
      productSrc:'./assets/img/items/it_6.webp',
    },
  ]
}
