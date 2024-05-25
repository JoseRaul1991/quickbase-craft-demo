import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StretchRequirementsComponent } from './stretch-requirements.component';

describe('StretchRequirementsComponent', () => {
  let component: StretchRequirementsComponent;
  let fixture: ComponentFixture<StretchRequirementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StretchRequirementsComponent]
    });
    fixture = TestBed.createComponent(StretchRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
