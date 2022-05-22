import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalProtectionListComponent } from './legal-protection-list.component';

describe('LegalProtectionListComponent', () => {
  let component: LegalProtectionListComponent;
  let fixture: ComponentFixture<LegalProtectionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalProtectionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalProtectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
