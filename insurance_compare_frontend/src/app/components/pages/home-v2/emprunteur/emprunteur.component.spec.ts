import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmprunteurComponent } from './emprunteur.component';

describe('EmprunteurComponent', () => {
  let component: EmprunteurComponent;
  let fixture: ComponentFixture<EmprunteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmprunteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmprunteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
