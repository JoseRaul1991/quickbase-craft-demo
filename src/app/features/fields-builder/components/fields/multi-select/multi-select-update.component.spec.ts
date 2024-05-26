import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMultiSelectComponent } from './multi-select-update.component';
import { provideMockStore } from '@ngrx/store/testing';
import {
  CardComponent,
  MultivalueComponent,
  SubmitButtonComponent,
} from '~app/shared/components';
import { FieldsState } from '~app/features/fields-builder/models';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { NgSelectModule } from '@ng-select/ng-select';
import { PreviewUpdateComponent } from './preview/preview-update.component';

describe('UpdateMultiSelectComponent', () => {
  let component: UpdateMultiSelectComponent;
  let fixture: ComponentFixture<UpdateMultiSelectComponent>;

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
      declarations: [UpdateMultiSelectComponent, PreviewUpdateComponent],
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
    fixture = TestBed.createComponent(UpdateMultiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
