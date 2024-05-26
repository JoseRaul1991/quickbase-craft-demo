import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldCreateCardComponent } from './field-create-card.component';

describe('FieldCreateCardComponent', () => {
  let component: FieldCreateCardComponent;
  let fixture: ComponentFixture<FieldCreateCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FieldCreateCardComponent]
    });
    fixture = TestBed.createComponent(FieldCreateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
