import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalProtectionComponent } from './legal-protection.component';

describe('LegalProtectionComponent', () => {
  let component: LegalProtectionComponent;
  let fixture: ComponentFixture<LegalProtectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalProtectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalProtectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
