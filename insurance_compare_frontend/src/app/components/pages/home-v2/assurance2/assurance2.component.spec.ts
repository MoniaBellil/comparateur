import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assurance2Component } from './assurance2.component';

describe('Assurance2Component', () => {
  let component: Assurance2Component;
  let fixture: ComponentFixture<Assurance2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assurance2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Assurance2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
