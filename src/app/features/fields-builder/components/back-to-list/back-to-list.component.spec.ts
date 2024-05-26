import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackToListComponent } from './back-to-list.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('BackToListComponent', () => {
  let component: BackToListComponent;
  let fixture: ComponentFixture<BackToListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackToListComponent],
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(BackToListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
