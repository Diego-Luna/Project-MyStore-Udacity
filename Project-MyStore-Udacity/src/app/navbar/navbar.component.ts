import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  carProductsNumber: number = 0;
  manuFixed: boolean = false;

  constructor(private productCartService: ProductCartService, private router: Router) { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.carProductsNumber = this.productCartService.getProductCartNumber();

    var url = `${this.router.parseUrl(this.router.url)}`;

    if (url === "/" || url === "/#shop" || url === "/#footer") {
      this.manuFixed = true;
    } else {
      this.manuFixed = false;
    }
  }

}
