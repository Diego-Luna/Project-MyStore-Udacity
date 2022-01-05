import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { HomeSmallProductSectionComponent } from './home-small-product-section/home-small-product-section.component';
import { HomeBigProductSectionComponent } from './home-big-product-section/home-big-product-section.component';
import { HomeSafeSectionComponent } from './home-safe-section/home-safe-section.component';
import { ProductsItemComponent } from './products-item/products-item.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CartItemComponent } from './cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainHomeComponent,
    HomeSmallProductSectionComponent,
    HomeBigProductSectionComponent,
    HomeSafeSectionComponent,
    ProductsItemComponent,
    FooterComponent,
    HomeComponent,
    ProductPageComponent,
    CartPageComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
