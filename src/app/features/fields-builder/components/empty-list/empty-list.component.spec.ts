import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyListComponent } from './empty-list.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('EmptyListComponent', () => {
  let component: EmptyListComponent;
  let fixture: ComponentFixture<EmptyListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmptyListComponent],
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(EmptyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
