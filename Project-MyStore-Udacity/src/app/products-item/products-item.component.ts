import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.css']
})
export class ProductsItemComponent implements OnInit {

  @Input() imgUrl: string = "";
  @Input() prodcutName: string = "";
  @Input() productPrice: number = 0;
  @Input() productId: number = -1;

  constructor() { }

  ngOnInit(): void {
  }

}
