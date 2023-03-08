import { Component } from '@angular/core';
import { bannerImage } from '../../shared/banner/banner.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  images = [
    {
      imageSrc: './assets/img/banner/banner.jpg',
      imageAlt: 'banner1'
    },
    {
      imageSrc: './assets/img/banner/banner_2.webp',
      imageAlt: 'banner2'
    },
    {
      imageSrc: './assets/img/banner/banner_3.webp',
      imageAlt: 'banner2'
    }
  ]
}

