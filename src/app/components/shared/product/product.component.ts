import { Component, Input, OnInit } from '@angular/core';

export interface ProductImage{
  productSrc: string;
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  @Input() products: ProductImage[] = []

  // selectedIndex = 0;

  ngOnInit(): void {

  }
}
