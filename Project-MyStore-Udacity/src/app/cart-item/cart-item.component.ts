import { Component, OnInit, Input } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { ProductsServiceService } from '../products-service.service';
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
  constructor(private productCartService: ProductCartService, private productsServiceService: ProductsServiceService) { }

  ngOnInit(): void {
  }

  removeProduct(): void {
    alert(`Producto eliminado : ${this.product.name}`)
    this.productCartService.removeProductCart(this.product.id);
    this.productsServiceService.changeProductQuantity(this.product.id, 0);
  }

  ngDoCheck(): void {
    if (this.product) {
      if (this.product.productQuantity <= 9) {
        this.disableMore = false;
      } else {
        this.disableMore = true;
      }
    }
  }

  moreCount(): void {
    if (this.product.productQuantity <= 9) {
      this.productCartService.moreProductQuantity(this.product.id)
      this.disableMore = false;
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
