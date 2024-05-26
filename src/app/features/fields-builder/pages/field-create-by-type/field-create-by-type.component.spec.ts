import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldCreateByTypeComponent } from './field-create-by-type.component';
import { RouterTestingModule } from '@angular/router/testing';
import {
  BackToListComponent,
  TypeNoSupportedComponent,
} from '../../components';

describe('FieldCreateByTypeComponent', () => {
  let component: FieldCreateByTypeComponent;
  let fixture: ComponentFixture<FieldCreateByTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        FieldCreateByTypeComponent,
        BackToListComponent,
        TypeNoSupportedComponent,
      ],
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(FieldCreateByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
