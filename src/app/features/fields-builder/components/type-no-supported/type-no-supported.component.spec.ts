import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeNoSupportedComponent } from './type-no-supported.component';

describe('TypeNoSupportedComponent', () => {
  let component: TypeNoSupportedComponent;
  let fixture: ComponentFixture<TypeNoSupportedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypeNoSupportedComponent]
    });
    fixture = TestBed.createComponent(TypeNoSupportedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
