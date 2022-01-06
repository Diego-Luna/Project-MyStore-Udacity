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
  arrayValue: boolean[] = [];

  totalPrice: number = 0;

  fullName: string = "";
  adress: string = "";
  creditCarNumber: number | undefined;

  buttonActivate: boolean = true;
  inputCreditCarNumber: boolean = false;
  onlyLetters: boolean = false;



  constructor(private productCartService: ProductCartService, private productsService: ProductsServiceService, private router: Router) { }

  ngOnInit(): void {
    this.cartProducts = this.productCartService.getProductCart();
  }

  ngDoCheck(): void {
    this.totalPrice = this.productCartService.getTotalPrice()

    if (this.fullName.length > 0) {
      this.arrayValue = [];
      var patron = /[A-Za-z]/;

      for (var i: number = 0; this.fullName.length > i; i++) {
        if (this.fullName[i] === " ") {
          this.arrayValue.push(true)
        } else {
          this.arrayValue.push(patron.test(this.fullName[i]))

        }
      }

      if (this.arrayValue.some(n => n === false) === true) {
        this.onlyLetters = true;
      } else {
        this.onlyLetters = false;
      }

    }

    if (this.cartProducts.length > 0 && this.fullName.length >= 10 && this.adress.length >= 10 && this.inputCreditCarNumber === true && this.arrayValue.some(n => n === false) === false) {
      this.buttonActivate = false;
    } else {
      this.buttonActivate = true;
    }

  }

  checkInformation(): void {
    this.productCartService.clearProductCart();
    this.productsService.productsReset();
    this.router.navigate(['payment']);
  }

  checkCreditCart(value: number): void {

    if (value >= 1000000000 && value <= 9999999999) {
      this.inputCreditCarNumber = true
    }
  }

}
