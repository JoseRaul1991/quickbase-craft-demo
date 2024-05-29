import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultivalueComponent } from './multivalue.component';
import { CommonModule } from '@angular/common';
import { MaxLengthPipe } from '~app/shared/pipes';
import { signal } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('MultivalueComponent', () => {
  let component: MultivalueComponent;
  let fixture: ComponentFixture<MultivalueComponent>;

  const elements = signal([]);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MultivalueComponent,
        CommonModule,
        MaxLengthPipe,
        BrowserAnimationsModule,
      ],
    });
    fixture = TestBed.createComponent(MultivalueComponent);
    component = fixture.componentInstance;
    component.elements = elements;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('[removeElement]', () => {
    it('should remove an element at the specified index', () => {
      // GIVEN
      component.elements.set(['element1', 'element2', 'element3']);
      fixture.detectChanges();

      // WHEN
      component.removeElement(1);
      fixture.detectChanges();

      // THEN
      expect(component.elements()).toEqual(['element1', 'element3']);
    });
  });

  describe('[onKeyDownEnter]', () => {
    it('should add element on Enter key press', () => {
      // GIVEN
      const event = new KeyboardEvent('keydown', { key: 'Enter' });
      component.currentText.set('newElement');
      spyOn(component, 'addElement' as never);

      // WHEN
      component.onKeyDownEnter(event);

      // THEN
      expect(component['addElement']).toHaveBeenCalled();
    });
  });

  describe('[addElement]', () => {
    it('should add new elements and clear input if conditions are met', () => {
      // GIVEN
      component.currentText.set('newElement1,newElement2');
      component.elements.set(['existingElement']);
      fixture.detectChanges();

      // WHEN
      component['addElement']();
      fixture.detectChanges();

      // THEN
      expect(component.elements()).toEqual([
        'existingElement',
        'newElement1',
        'newElement2',
      ]);
      expect(component.currentText()).toBe('');
    });

    it('should not add elements if maxElements limit is reached', () => {
      // GIVEN
      component.maxElements = 1;
      component.currentText.set('newElement1');
      component.elements.set(['existingElement']);
      fixture.detectChanges();

      // WHEN
      component['addElement']();
      fixture.detectChanges();

      // THEN
      expect(component.elements()).toEqual(['existingElement']);
    });

    it('should not add elements if currentText exceeds maxLength', () => {
      // GIVEN
      component.maxLength = 5;
      component.currentText.set('toolongtext');
      component.elements.set([]);
      fixture.detectChanges();

      // WHEN
      component['addElement']();
      fixture.detectChanges();

      // THEN
      expect(component.elements()).toEqual([]);
    });

    it('should not add elements if currentText is empty', () => {
      // GIVEN
      component.currentText.set('');
      component.elements.set([]);
      fixture.detectChanges();

      // WHEN
      component['addElement']();
      fixture.detectChanges();

      // THEN
      expect(component.elements()).toEqual([]);
    });
  });
});
