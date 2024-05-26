/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page404Component } from './404.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('404Component', () => {
  let component: Page404Component;
  let fixture: ComponentFixture<Page404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Page404Component],
      imports: [BrowserAnimationsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
