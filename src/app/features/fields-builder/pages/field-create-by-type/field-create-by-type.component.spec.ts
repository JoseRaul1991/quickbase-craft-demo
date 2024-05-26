import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldCreateByTypeComponent } from './field-create-by-type.component';

describe('FieldCreateByTypeComponent', () => {
  let component: FieldCreateByTypeComponent;
  let fixture: ComponentFixture<FieldCreateByTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FieldCreateByTypeComponent]
    });
    fixture = TestBed.createComponent(FieldCreateByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
