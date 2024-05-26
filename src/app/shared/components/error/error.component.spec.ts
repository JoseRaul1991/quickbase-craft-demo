import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorComponent } from './error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ErrorComponent', () => {
  let component: ErrorComponent;
  let fixture: ComponentFixture<ErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ErrorComponent, BrowserAnimationsModule],
    });
    fixture = TestBed.createComponent(ErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
