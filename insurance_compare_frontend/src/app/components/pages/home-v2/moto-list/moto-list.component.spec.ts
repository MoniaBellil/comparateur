import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoListComponent } from './moto-list.component';

describe('MotoListComponent', () => {
  let component: MotoListComponent;
  let fixture: ComponentFixture<MotoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
