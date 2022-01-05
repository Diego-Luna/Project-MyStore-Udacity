import { Component, OnInit, Input } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
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


  @Input() product: Product | any;

  disableMore: boolean = false;
  constructor(private productCartService: ProductCartService) { }

  ngOnInit(): void {
  }

  removeProduct(): void {
    var status = this.productCartService.removeProductCart(this.product.id);
    console.log("-> status");
    console.log(status);
  }

  moreCount(): void {
    if (this.product.productQuantity < 9) {
      this.productCartService.moreProductQuantity(this.product.id)
    } else {
      this.disableMore = true;
    }
  }

  lessCount(): void {
    if (this.product.productQuantity > 1) {
      this.productCartService.lessProductQuantity(this.product.id)
    } else {
      this.productCartService.removeProductCart(this.product.id)
    }

  }

}
