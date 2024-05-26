import { TestBed } from '@angular/core/testing';

import { FieldBuilderService } from './field-builder.service';
import { HttpClientModule } from '@angular/common/http';

describe('FieldBuilderService', () => {
  let service: FieldBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [FieldBuilderService],
    });
    service = TestBed.inject(FieldBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
