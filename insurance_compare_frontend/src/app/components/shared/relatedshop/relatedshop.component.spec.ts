import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedshopComponent } from './relatedshop.component';

describe('RelatedshopComponent', () => {
  let component: RelatedshopComponent;
  let fixture: ComponentFixture<RelatedshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatedshopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
