import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductsServiceService } from '../products-service.service';


import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ HomeComponent ]
  //   })
  //   .compileComponents();
  // });
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      // here is my imported Http TestingModule
      imports: [HttpClientTestingModule],
      providers: [
        { provide: ProductsServiceService, useClass: FakeApiService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
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