import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductCartService } from '../product-cart.service';

import { RouterTestingModule } from '@angular/router/testing';

import { ProductPageComponent } from './product-page.component';

describe('ProductPageComponent', () => {
  let component: ProductPageComponent;
  let fixture: ComponentFixture<ProductPageComponent>;

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ProductPageComponent]
  //   })
  //     .compileComponents();
  // });

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ProductPageComponent],
      // here is my imported Http TestingModule
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        { provide: ProductCartService, useClass: FakeApiService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class FakeApiService {

  fakeVal = 5;
  getProductCart() {
    return [{
      "id": 0,
      "name": "10 conductive ink kits",
      "price": 45,
      "imgUrl": "./assets/ink.png",
      "productQuantity": 0
    }]
  }

  getTotalPrice() {
    return 45
  }
}