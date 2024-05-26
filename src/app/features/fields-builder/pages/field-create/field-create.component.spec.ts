import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldCreateComponent } from './field-create.component';
import { provideMockStore } from '@ngrx/store/testing';
import { BackToListComponent } from '../../components';
import { RouterTestingModule } from '@angular/router/testing';

describe('FieldCreateComponent', () => {
  let component: FieldCreateComponent;
  let fixture: ComponentFixture<FieldCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FieldCreateComponent, BackToListComponent],
      imports: [RouterTestingModule],
      providers: [provideMockStore({})],
    });
    fixture = TestBed.createComponent(FieldCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
