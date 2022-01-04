import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// import * as data from './data.json';


@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  cartList = []
  produdctsList: any = []

  constructor(private http: HttpClient) { }

  getProducts(): Observable<[]> {
    return this.http.get<[]>('assets/data.json');
  }
}
