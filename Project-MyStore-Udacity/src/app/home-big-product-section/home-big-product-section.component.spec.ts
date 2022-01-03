import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBigProductSectionComponent } from './home-big-product-section.component';

describe('HomeBigProductSectionComponent', () => {
  let component: HomeBigProductSectionComponent;
  let fixture: ComponentFixture<HomeBigProductSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBigProductSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBigProductSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
