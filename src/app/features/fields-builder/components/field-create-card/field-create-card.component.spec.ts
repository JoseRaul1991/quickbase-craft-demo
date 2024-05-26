import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldCreateCardComponent } from './field-create-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FieldType, FieldTypeDefinition } from '../../models';
import { RouterTestingModule } from '@angular/router/testing';

describe('FieldCreateCardComponent', () => {
  let component: FieldCreateCardComponent;
  let fixture: ComponentFixture<FieldCreateCardComponent>;

  const type: FieldType = {
    label: 'Test Multiselect',
    type: FieldTypeDefinition.Multiselect,
    description: 'Test Multiselect Description',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FieldCreateCardComponent],
      imports: [BrowserAnimationsModule, RouterTestingModule],
    });
    fixture = TestBed.createComponent(FieldCreateCardComponent);
    component = fixture.componentInstance;
    component.type = type;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
