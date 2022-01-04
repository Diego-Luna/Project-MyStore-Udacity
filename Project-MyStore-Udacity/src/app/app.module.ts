import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
