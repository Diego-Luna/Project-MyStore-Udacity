import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsServiceService } from '../products-service.service';
import { ProductCartService } from '../product-cart.service';

interface Product {
  id: number,
  name: string,
  price: number,
  imgUrl: string,
  productQuantity: number
}
interface Data {
  products?: Product[],
}
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  product: any | Product;

  url: string = "";
  newUrl: number = 1;

  product_number: number = 1;

  constructor(private productsService: ProductsServiceService, private productCartService: ProductCartService, private router: Router) {
  }

  ngOnInit(): void {

    this.url = `${this.router.parseUrl(this.router.url)}`;

    // /product/1
    this.newUrl = parseInt(this.url.substr(9, this.url.length)) - 1

    this.product = this.productsService.getProduct(this.newUrl)

    if (typeof this.product === 'undefined') {
      this.productsService.getData().subscribe(data => {

        var newData: any = data;
        this.productsService.receiveProducts(newData.products);
        this.product = this.productsService.getProduct(this.newUrl)
      });
    }
  }

  addToBookmarks(): void {

    var productNew: Product = {
      id: this.product.id,
      name: this.product.name,
      price: this.product.price,
      imgUrl: this.product.imgUrl,
      productQuantity: typeof this.product_number === 'number' ? this.product_number : parseInt(this.product_number),
    }
    var redy = this.productCartService.addToProductCart(productNew)

    console.log("-> redy");
    console.log(redy);


  }

}
