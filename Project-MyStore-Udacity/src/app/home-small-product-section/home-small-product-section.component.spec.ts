import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSmallProductSectionComponent } from './home-small-product-section.component';

describe('HomeSmallProductSectionComponent', () => {
  let component: HomeSmallProductSectionComponent;
  let fixture: ComponentFixture<HomeSmallProductSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSmallProductSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSmallProductSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
