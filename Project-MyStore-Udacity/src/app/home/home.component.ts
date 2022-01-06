import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../products-service.service';

import { ProductCartService } from '../product-cart.service';


interface Product {
  id: number,
  name: string,
  price: number,
  imgUrl: string,
  productQuantity: number
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  produdctsList: any | Product[] = []

  constructor(private productsService: ProductsServiceService, private productCartService: ProductCartService) {
  }

  ngOnInit(): void {

    this.produdctsList = this.productsService.getProducts()

    if (this.produdctsList.length < 2) {
      this.productsService.getData().subscribe(data => {
        var newData: any = data;
        this.productsService.receiveProducts(newData.products);
        this.produdctsList = this.productsService.getProducts()
      });
    }
  }

  addCart(product: Product): void {


    var productNew: Product = {
      id: product.id,
      name: product.name,
      price: product.price,
      imgUrl: product.imgUrl,
      productQuantity: 1
    }
    this.productsService.changeProductQuantity(productNew.id, 1);
    this.productCartService.addToProductCart(productNew);
    this.produdctsList = this.productsService.getProducts()


  }

}
