import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoInsuranceComponent } from './moto-insurance.component';

describe('MotoInsuranceComponent', () => {
  let component: MotoInsuranceComponent;
  let fixture: ComponentFixture<MotoInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotoInsuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotoInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
