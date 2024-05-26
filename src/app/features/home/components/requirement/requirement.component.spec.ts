import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementComponent } from './requirement.component';
import { Requirement } from '../../models';
import { CheckmarkComponent } from '~app/shared/components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('RequirementComponent', () => {
  let component: RequirementComponent;
  let fixture: ComponentFixture<RequirementComponent>;

  const requirement: Requirement = {
    title: 'Test Title',
    description: 'Test Description',
    checked: false,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequirementComponent],
      imports: [CheckmarkComponent, BrowserAnimationsModule],
    });
    fixture = TestBed.createComponent(RequirementComponent);
    component = fixture.componentInstance;
    component.requirement = requirement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('[toggleCheck]', () => {
    beforeEach(() => {
      component.requirement = { ...requirement };
    });
    it('should toggle the checked property of requirement when called with MouseEvent', () => {
      // GIVEN
      const event = new MouseEvent('click');

      // WHEN
      component.toggleCheck(event);
      fixture.detectChanges();

      // THEN
      expect(component.requirement.checked).toBeTrue();

      // WHEN called again
      component.toggleCheck(event);
      fixture.detectChanges();

      // THEN
      expect(component.requirement.checked).toBeFalse();
    });

    it('should stop event propagation', () => {
      // GIVEN
      const event = new MouseEvent('click');
      spyOn(event, 'stopPropagation');

      // WHEN
      component.toggleCheck(event);
      fixture.detectChanges();

      // THEN
      expect(event.stopPropagation).toHaveBeenCalled();
    });
  });
});
