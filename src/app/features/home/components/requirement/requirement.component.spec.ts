import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementComponent } from './requirement.component';
import { Requirement } from '../../models';

describe('RequirementComponent', () => {
  let component: RequirementComponent;
  let fixture: ComponentFixture<RequirementComponent>;

  const requirement: Requirement = {
    title: 'Test Title',
    description: 'Test Description',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequirementComponent],
    });
    fixture = TestBed.createComponent(RequirementComponent);
    component = fixture.componentInstance;
    component.requirement = requirement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
