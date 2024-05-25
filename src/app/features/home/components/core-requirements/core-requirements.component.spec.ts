import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreRequirementsComponent } from './core-requirements.component';

describe('CoreRequirementsComponent', () => {
  let component: CoreRequirementsComponent;
  let fixture: ComponentFixture<CoreRequirementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoreRequirementsComponent]
    });
    fixture = TestBed.createComponent(CoreRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
