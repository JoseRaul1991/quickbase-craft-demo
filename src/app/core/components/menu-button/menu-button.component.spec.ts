import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuButtonComponent } from './menu-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('MenuButtonComponent', () => {
  let component: MenuButtonComponent;
  let fixture: ComponentFixture<MenuButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuButtonComponent],
      imports: [BrowserAnimationsModule],
    });
    fixture = TestBed.createComponent(MenuButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
