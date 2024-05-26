import { TestBed } from '@angular/core/testing';

import { FieldTypesService } from './field-types.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { environment } from '~env/environment';

describe('FieldTypesService', () => {
  let service: FieldTypesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FieldTypesService],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(FieldTypesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('[list]', () => {
    it('should call this.http.get with the correct URL', () => {
      // WHEN
      service.list().subscribe();

      // THEN
      const req = httpMock.expectOne(`${environment.apiUrl}/field-types`);
      expect(req.request.method).toBe('GET');
    });
  });
});
