import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../products-service.service';

// interface Product {
//   id: number,
//   name: string,
//   price: number,
//   imgUrl: string,
//   productQuantity: number
// }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  produdctsList: any = []

  constructor(private productsService: ProductsServiceService) {
  }

  ngOnInit(): void {

    this.produdctsList = this.productsService.getProducts()

    if (this.produdctsList.length < 2) {
      this.productsService.getData().subscribe(data => {
        this.produdctsList = data
        this.produdctsList = this.produdctsList.products
        this.productsService.receiveProducts(this.produdctsList);
      });
    }
  }

}
