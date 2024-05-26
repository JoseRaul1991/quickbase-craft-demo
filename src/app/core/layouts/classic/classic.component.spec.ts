import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicLayoutComponent } from './classic.component';
import { CoreModule } from '~app/core/core.module';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ClassicLayoutComponent', () => {
  let component: ClassicLayoutComponent;
  let fixture: ComponentFixture<ClassicLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassicLayoutComponent],
      imports: [CoreModule, RouterTestingModule, BrowserAnimationsModule],
    });
    fixture = TestBed.createComponent(ClassicLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
