import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewUpdateComponent } from './preview-update.component';
import { provideMockStore } from '@ngrx/store/testing';
import { NgSelectModule } from '@ng-select/ng-select';
import { FieldsState } from '~app/features/fields-builder/models';
import { FormsModule } from '@angular/forms';

describe('PreviewUpdateComponent', () => {
  let component: PreviewUpdateComponent;
  let fixture: ComponentFixture<PreviewUpdateComponent>;

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
      declarations: [PreviewUpdateComponent],
      imports: [NgSelectModule, FormsModule],
      providers: [provideMockStore({ initialState })],
    });
    fixture = TestBed.createComponent(PreviewUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
