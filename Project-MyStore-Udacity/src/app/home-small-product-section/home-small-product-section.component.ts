import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-small-product-section',
  templateUrl: './home-small-product-section.component.html',
  styleUrls: ['./home-small-product-section.component.css']
})
export class HomeSmallProductSectionComponent implements OnInit {

  @Input() imgUrl: string = "";
  @Input() sectionName: string = "";
  @Input() titleName: string = "";

  @Input() colorTitle: string = "";
  @Input() colorSection: string = "";
  @Input() colorbackground: string = "";


  constructor() { }

  ngOnInit(): void {
  }

}
