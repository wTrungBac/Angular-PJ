import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/page/home/home.component';
import { ProductComponent } from './components/shared/product/product.component';
import { ProductListComponent } from './components/page/product-list/product-list.component';
import { ProductDetailComponent } from './components/page/product-detail/product-detail.component';

const routes: Routes = [
  {path:'home', component: HomeComponent },
  {path:'product-list' , component: ProductListComponent },
  {path: 'product-detail', component: ProductDetailComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
