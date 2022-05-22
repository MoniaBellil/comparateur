import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevoyanceListComponent } from './prevoyance-list.component';

describe('PrevoyanceListComponent', () => {
  let component: PrevoyanceListComponent;
  let fixture: ComponentFixture<PrevoyanceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrevoyanceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevoyanceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
