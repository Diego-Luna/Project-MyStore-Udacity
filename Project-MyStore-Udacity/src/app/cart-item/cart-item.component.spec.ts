import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductCartService } from '../product-cart.service';

import { CartItemComponent } from './cart-item.component';

describe('CartItemComponent', () => {
  let component: CartItemComponent;
  let fixture: ComponentFixture<CartItemComponent>;

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [CartItemComponent]
  //   })
  //     .compileComponents();
  // });

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [CartItemComponent],
      // here is my imported Http TestingModule
      imports: [HttpClientTestingModule],
      providers: [
        { provide: ProductCartService, useClass: FakeApiService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class FakeApiService {

  fakeVal = 5;
  getProducts() {
    return [{
      "id": 0,
      "name": "10 conductive ink kits",
      "price": 45,
      "imgUrl": "./assets/ink.png",
      "productQuantity": 0
    }, {
      "id": 0,
      "name": "10 conductive ink kits",
      "price": 45,
      "imgUrl": "./assets/ink.png",
      "productQuantity": 0
    }, {
      "id": 0,
      "name": "10 conductive ink kits",
      "price": 45,
      "imgUrl": "./assets/ink.png",
      "productQuantity": 0
    }]
  }

}