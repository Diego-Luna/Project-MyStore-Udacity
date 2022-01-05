import { Component, OnInit, Input } from '@angular/core';

interface Product {
  id: number,
  name: string,
  price: number,
  imgUrl: string,
  productQuantity: number
}

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {


  @Input() product: Product | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
