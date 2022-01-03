import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-safe-section',
  templateUrl: './home-safe-section.component.html',
  styleUrls: ['./home-safe-section.component.css']
})
export class HomeSafeSectionComponent implements OnInit {

  @Input() imgUrl: string = "";
  @Input() titleName: string = "";
  @Input() textName: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
