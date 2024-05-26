import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsListComponent } from './fields-list.component';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('FieldsListComponent', () => {
  let component: FieldsListComponent;
  let fixture: ComponentFixture<FieldsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [FieldsListComponent],
      providers: [provideMockStore({})],
    });
    fixture = TestBed.createComponent(FieldsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
