import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  @Input() productCount: number = 0;

  disableButton: boolean = false


  @Output() liked = new EventEmitter();



  constructor() { }

  ngOnInit(): void {
    if (this.productCount >= 1) {
      this.disableButton = true;

    } else {
      this.disableButton = false;
    }
  }

  ngDoCheck() {
    if (this.productCount >= 1) {
      this.disableButton = true;
    } else {
      this.disableButton = false;
    }
  }

}
