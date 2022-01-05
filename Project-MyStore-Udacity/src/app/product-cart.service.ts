import { Injectable } from '@angular/core';

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
export class ProductCartService {

  productCart: Product[] | any = [];

  constructor() { }

  getProductCart() {
    return this.productCart;
  }

  addToProductCart(bookmark: Product) {
    this.productCart.push(bookmark);
    return this.productCart;
  }

  removeProductCart(idProduct: number) {
    var indexProduct: number = this.productCart.findIndex((element: Product) => element.id === idProduct)
    this.productCart.splice(indexProduct, indexProduct + 1)

    return indexProduct
  }

  clearProductCart() {
    this.productCart = [];
    return this.productCart;
  }

  moreProductQuantity(idProduct: number) {
    var indexProduct: number = this.productCart.findIndex((element: Product) => element.id === idProduct)
    this.productCart[indexProduct].productQuantity += 1;
    return this.productCart[idProduct];
  }

  lessProductQuantity(idProduct: number) {
    var indexProduct: number = this.productCart.findIndex((element: Product) => element.id === idProduct)
    this.productCart[indexProduct].productQuantity -= 1;
    return this.productCart[idProduct];
  }

}
