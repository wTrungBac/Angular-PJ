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

}
