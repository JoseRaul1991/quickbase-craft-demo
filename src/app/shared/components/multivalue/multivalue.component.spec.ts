import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultivalueComponent } from './multivalue.component';
import { CommonModule } from '@angular/common';
import { MaxLengthPipe } from '~app/shared/pipes';
import { signal } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('MultivalueComponent', () => {
  let component: MultivalueComponent;
  let fixture: ComponentFixture<MultivalueComponent>;

  const elements = signal([]);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MultivalueComponent,
        CommonModule,
        MaxLengthPipe,
        BrowserAnimationsModule,
      ],
    });
    fixture = TestBed.createComponent(MultivalueComponent);
    component = fixture.componentInstance;
    component.elements = elements;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
