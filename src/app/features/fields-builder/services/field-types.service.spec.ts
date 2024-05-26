import { TestBed } from '@angular/core/testing';

import { FieldTypesService } from './field-types.service';
import { HttpClientModule } from '@angular/common/http';

describe('FieldTypesService', () => {
  let service: FieldTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FieldTypesService],
      imports: [HttpClientModule],
    });
    service = TestBed.inject(FieldTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
