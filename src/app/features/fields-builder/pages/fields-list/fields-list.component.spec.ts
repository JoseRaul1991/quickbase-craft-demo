import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsListComponent } from './fields-list.component';

describe('FieldsListComponent', () => {
  let component: FieldsListComponent;
  let fixture: ComponentFixture<FieldsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FieldsListComponent]
    });
    fixture = TestBed.createComponent(FieldsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
