import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreRequirementsComponent } from './core-requirements.component';
import { CardComponent, CardHeaderComponent } from '~app/shared/components';
import { RequirementComponent } from '../requirement/requirement.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CoreRequirementsComponent', () => {
  let component: CoreRequirementsComponent;
  let fixture: ComponentFixture<CoreRequirementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoreRequirementsComponent, RequirementComponent],
      imports: [CardComponent, CardHeaderComponent, BrowserAnimationsModule],
    });
    fixture = TestBed.createComponent(CoreRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
