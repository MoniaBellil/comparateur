import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalInsuranceComponent } from './animal-insurance.component';

describe('AnimalInsuranceComponent', () => {
  let component: AnimalInsuranceComponent;
  let fixture: ComponentFixture<AnimalInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalInsuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
