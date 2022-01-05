import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Product {
  id: number,
  name: string,
  price: number,
  imgUrl: string,
  productQuantity: number
}

@Injectable({
  providedIn: 'root'
})

export class ProductsServiceService {

  cartList = []
  produdctsList: any = []
  data: any = []

  constructor(private http: HttpClient) {
  }

  receiveProducts(products: Product[]) {
    this.produdctsList = products
    return null
  }

  getData(): Observable<[]> {
    return this.http.get<[]>('assets/data.json');

  }
  getProducts() {
    return this.produdctsList;
  }

  getProduct(id: number) {
    const found = this.produdctsList.find((element: Product) => element.id > id);
    return found;

  }

  changeProductQuantity(id: number, number: number) {
    var indexProduct: number = this.produdctsList.findIndex((element: Product) => element.id === id)
    this.produdctsList[indexProduct].productQuantity = number;
    return this.produdctsList[indexProduct];
  }

}
