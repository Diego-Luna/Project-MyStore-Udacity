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

  constructor(private productCartService: ProductCartService) { }

  ngOnInit(): void {
    this.cartProducts = this.productCartService.getProductCart();
  }

}
