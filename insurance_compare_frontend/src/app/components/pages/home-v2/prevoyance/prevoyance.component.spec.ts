import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevoyanceComponent } from './prevoyance.component';

describe('PrevoyanceComponent', () => {
  let component: PrevoyanceComponent;
  let fixture: ComponentFixture<PrevoyanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrevoyanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevoyanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
