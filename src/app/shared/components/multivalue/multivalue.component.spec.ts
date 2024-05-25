import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultivalueComponent } from './multivalue.component';

describe('MultivalueComponent', () => {
  let component: MultivalueComponent;
  let fixture: ComponentFixture<MultivalueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultivalueComponent]
    });
    fixture = TestBed.createComponent(MultivalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
