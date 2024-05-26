import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMultiSelectComponent } from './multi-select-create.component';
import { provideMockStore } from '@ngrx/store/testing';
import {
  CardComponent,
  MultivalueComponent,
  SubmitButtonComponent,
} from '~app/shared/components';
import { FieldsState } from '~app/features/fields-builder/models';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { PreviewComponent } from './preview/preview.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CreateMultiSelectComponent', () => {
  let component: CreateMultiSelectComponent;
  let fixture: ComponentFixture<CreateMultiSelectComponent>;

  const initialState: FieldsState = {
    fields: {
      loading: true,
    },
    types: {
      loading: true,
    },
    create: {},
    update: {},
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateMultiSelectComponent, PreviewComponent],
      imports: [
        CardComponent,
        MultivalueComponent,
        SubmitButtonComponent,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        NgSelectModule,
        BrowserAnimationsModule,
      ],
      providers: [provideMockStore({ initialState })],
    });
    fixture = TestBed.createComponent(CreateMultiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
