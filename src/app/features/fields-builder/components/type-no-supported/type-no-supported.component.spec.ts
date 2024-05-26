import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeNoSupportedComponent } from './type-no-supported.component';
import { BackToListComponent } from '../back-to-list/back-to-list.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('TypeNoSupportedComponent', () => {
  let component: TypeNoSupportedComponent;
  let fixture: ComponentFixture<TypeNoSupportedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypeNoSupportedComponent, BackToListComponent],
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(TypeNoSupportedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
