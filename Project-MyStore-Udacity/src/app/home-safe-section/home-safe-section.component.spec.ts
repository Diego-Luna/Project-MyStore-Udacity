import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSafeSectionComponent } from './home-safe-section.component';

describe('HomeSafeSectionComponent', () => {
  let component: HomeSafeSectionComponent;
  let fixture: ComponentFixture<HomeSafeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSafeSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSafeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
