import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmprunteurListComponent } from './emprunteur-list.component';

describe('EmprunteurListComponent', () => {
  let component: EmprunteurListComponent;
  let fixture: ComponentFixture<EmprunteurListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmprunteurListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmprunteurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
