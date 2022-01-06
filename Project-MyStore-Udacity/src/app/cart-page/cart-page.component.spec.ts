import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductCartService } from '../product-cart.service';

import { RouterTestingModule } from '@angular/router/testing';

import { CartPageComponent } from './cart-page.component';

describe('CartPageComponent', () => {
  let component: CartPageComponent;
  let fixture: ComponentFixture<CartPageComponent>;

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [CartPageComponent]
  //   })
  //     .compileComponents();
  // });

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [CartPageComponent],
      // here is my imported Http TestingModule
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        { provide: ProductCartService, useClass: FakeApiService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartPageComponent);
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