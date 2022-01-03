import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { HomeSmallProductSectionComponent } from './home-small-product-section/home-small-product-section.component';
import { HomeBigProductSectionComponent } from './home-big-product-section/home-big-product-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainHomeComponent,
    HomeSmallProductSectionComponent,
    HomeBigProductSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
