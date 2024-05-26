import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewComponent } from './preview.component';
import { provideMockStore } from '@ngrx/store/testing';
import { NgSelectModule } from '@ng-select/ng-select';
import { FieldsState } from '~app/features/fields-builder/models';
import { FormsModule } from '@angular/forms';

describe('PreviewComponent', () => {
  let component: PreviewComponent;
  let fixture: ComponentFixture<PreviewComponent>;

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
      declarations: [PreviewComponent],
      imports: [NgSelectModule, FormsModule],
      providers: [provideMockStore({ initialState })],
    });
    fixture = TestBed.createComponent(PreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
