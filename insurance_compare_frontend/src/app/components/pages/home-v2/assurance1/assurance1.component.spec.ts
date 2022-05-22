import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assurance1Component } from './assurance1.component';

describe('Assurance1Component', () => {
  let component: Assurance1Component;
  let fixture: ComponentFixture<Assurance1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assurance1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Assurance1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
