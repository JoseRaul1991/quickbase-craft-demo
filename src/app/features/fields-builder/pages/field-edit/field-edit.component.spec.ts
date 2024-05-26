import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldEditComponent } from './field-edit.component';
import {
  BackToListComponent,
  TypeNoSupportedComponent,
} from '../../components';
import { RouterTestingModule } from '@angular/router/testing';

describe('FieldEditComponent', () => {
  let component: FieldEditComponent;
  let fixture: ComponentFixture<FieldEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        FieldEditComponent,
        BackToListComponent,
        TypeNoSupportedComponent,
      ],
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(FieldEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
