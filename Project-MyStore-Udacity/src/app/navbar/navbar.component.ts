import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../product-cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  carProductsNumber: number = 0;

  constructor(private productCartService: ProductCartService) { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.carProductsNumber = this.productCartService.getProductCartNumber();
  }

}
