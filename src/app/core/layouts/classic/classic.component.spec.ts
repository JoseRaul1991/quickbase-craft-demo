import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicLayoutComponent } from './classic.component';

describe('ClassicLayoutComponent', () => {
  let component: ClassicLayoutComponent;
  let fixture: ComponentFixture<ClassicLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassicLayoutComponent],
    });
    fixture = TestBed.createComponent(ClassicLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
