import { ViewEncapsulation } from '@angular/core';
import { Component } from '@angular/core';
import SwiperCore, {Navigation, Pagination} from 'swiper';

SwiperCore.use([Navigation, Pagination]);


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent {

  products = [
    {
      productSrc:'./assets/img/products/pd_1.jpg',
    },
    {
      productSrc:'./assets/img/products/pd_2.webp',
    },
    {
      productSrc:'./assets/img/products/pd_3.webp',
    },
    {
      productSrc:'./assets/img/products/pd_4.jpg',
    },
  ]
}
