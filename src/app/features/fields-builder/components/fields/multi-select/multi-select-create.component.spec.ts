import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMultiSelectComponent } from './multi-select-create.component';

describe('CreateMultiSelectComponent', () => {
  let component: CreateMultiSelectComponent;
  let fixture: ComponentFixture<CreateMultiSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateMultiSelectComponent],
    });
    fixture = TestBed.createComponent(CreateMultiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
