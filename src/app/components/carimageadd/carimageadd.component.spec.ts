import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarimageaddComponent } from './carimageadd.component';

describe('CarimageaddComponent', () => {
  let component: CarimageaddComponent;
  let fixture: ComponentFixture<CarimageaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarimageaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarimageaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
