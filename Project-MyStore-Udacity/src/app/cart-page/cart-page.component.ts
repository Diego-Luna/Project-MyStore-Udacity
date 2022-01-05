import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../product-cart.service';

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

  constructor(private productCartService: ProductCartService) { }

  ngOnInit(): void {
    this.cartProducts = this.productCartService.getProductCart();
  }

  ngDoCheck(): void {
    this.totalPrice = this.productCartService.getTotalPrice()
    if (this.fullName.length >= 10 && this.adress.length >= 10 && this.creditCarNumber) {

      if (this.creditCarNumber > 1111111111 && this.creditCarNumber < 9999999999) {
        this.buttonActivate = false;
      } else {
        this.buttonActivate = true;
      }
    } else {
      this.buttonActivate = true;
    }
  }

  checkInformation(): void {
    alert("Hola")
  }

}
