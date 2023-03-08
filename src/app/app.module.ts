import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/page/home/home.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ProductListComponent } from './components/page/product-list/product-list.component';
import { ProductComponent } from './components/shared/product/product.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSliderModule} from '@angular/material/slider';
import { BannerComponent } from './components/shared/banner/banner.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { CardComponent } from './components/shared/card/card.component';
import { SwiperModule } from 'swiper/angular';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import { FeatureComponent } from './components/shared/feature/feature.component';
import {CloudinaryModule} from '@cloudinary/ng';
import { ProductDetailComponent } from './components/page/product-detail/product-detail.component';
import { AppDetail } from './components/page/product-detail/event/ImageChange';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AppComponent,
    ProductListComponent,
    ProductComponent,
    BannerComponent,
    CardComponent,
    FeatureComponent,
    SidebarComponent,
    ProductDetailComponent,
    AppDetail,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatSliderModule,
    SwiperModule,
    MatCardModule,
    MatListModule,
    MatExpansionModule,
    CloudinaryModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
