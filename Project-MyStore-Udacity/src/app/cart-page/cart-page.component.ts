import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { ProductsServiceService } from '../products-service.service';
import { Router } from '@angular/router';

interface Product {
  id: number,
  name: string,
  price: number,
  imgUrl: string,
  productQuantity: number
}
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  cartProducts: Product[] = []
  totalPrice: number = 0;

  fullName: string = "";
  adress: string = "";
  creditCarNumber: number | undefined;

  buttonActivate: boolean = true;

  constructor(private productCartService: ProductCartService, private productsService: ProductsServiceService, private router: Router) { }

  ngOnInit(): void {
    this.cartProducts = this.productCartService.getProductCart();
  }

  ngDoCheck(): void {
    this.totalPrice = this.productCartService.getTotalPrice()
  }

  checkInformation(): void {
    this.productCartService.clearProductCart();
    this.productsService.productsReset();
    this.router.navigate(['payment']);
  }

  checkCreditCart(value: any): void {
    if (this.cartProducts.length > 0 && this.fullName.length >= 10 && this.adress.length >= 10 && value >= 1000000000 && value <= 9999999999) {
      this.buttonActivate = false;
    } else {
      this.buttonActivate = true;
    }

  }

}
