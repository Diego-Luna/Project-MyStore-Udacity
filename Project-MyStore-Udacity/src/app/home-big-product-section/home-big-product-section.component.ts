import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-big-product-section',
  templateUrl: './home-big-product-section.component.html',
  styleUrls: ['./home-big-product-section.component.css']
})
export class HomeBigProductSectionComponent implements OnInit {

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
