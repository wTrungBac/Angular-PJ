import { Component, Input, OnInit } from '@angular/core';

export interface bannerImage{
  imageSrc: string;
  imageAlt: string;
}
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit{
  @Input() images: bannerImage[] = []
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() sildeInterval = 3000; //Default to 3 second

  selectedIndex = 0;

  ngOnInit(): void{
    if(this.autoSlide){
      this.autoSildeImage();
    }
  }

 // Change slide in every 3 second
  autoSildeImage(): void{
    setInterval(() => {
      this.onNextClick();
    }, this.sildeInterval);
  }

  //set index of image on dot/ indicator click
  selectImage(index: number): void{
    this.selectedIndex = index;
  }

  onPrevClick(): void{
    if(this.selectedIndex === 0){
      this.selectedIndex = this.images.length - 1;
    } else{
      this.selectedIndex--;
    }
  }

  onNextClick(): void{
    if(this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else{
      this.selectedIndex++;
    }
  }
}
