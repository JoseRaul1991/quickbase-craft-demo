import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StretchRequirementsComponent } from './stretch-requirements.component';
import { CardComponent, CardHeaderComponent } from '~app/shared/components';
import { RequirementComponent } from '../requirement/requirement.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('StretchRequirementsComponent', () => {
  let component: StretchRequirementsComponent;
  let fixture: ComponentFixture<StretchRequirementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StretchRequirementsComponent, RequirementComponent],
      imports: [CardComponent, CardHeaderComponent, BrowserAnimationsModule],
    });
    fixture = TestBed.createComponent(StretchRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
