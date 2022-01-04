import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../products-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  produdctsList: any = []

  // constructor() { }
  constructor(private productsService: ProductsServiceService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(data => {
      this.produdctsList = data;
      console.log(this.produdctsList);
    });
  }

}
