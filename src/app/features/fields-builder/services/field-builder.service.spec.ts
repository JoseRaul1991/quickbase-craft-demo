import { TestBed } from '@angular/core/testing';

import { FieldBuilderService } from './field-builder.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { environment } from '~env/environment';
import {
  Field,
  FieldCreate,
  FieldTypeDefinition,
  OrderOptions,
} from '../models';

describe('FieldBuilderService', () => {
  let service: FieldBuilderService;
  let httpMock: HttpTestingController;

  const fieldCreate: FieldCreate = {
    label: 'Test Field Label',
    type: FieldTypeDefinition.Multiselect,
    isRequired: true,
    choices: ['choice1', 'choice2'],
    defaultValue: 'choice1',
    order: OrderOptions.AlphabeticalAZ,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FieldBuilderService],
    });
    service = TestBed.inject(FieldBuilderService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('[list]', () => {
    it('should call GET with the correct URL', () => {
      // WHEN
      service.list().subscribe();

      // THEN
      const req = httpMock.expectOne(`${environment.apiUrl}/fields`);
      expect(req.request.method).toBe('GET');
    });
  });

  describe('[get]', () => {
    it('should call GET with the correct URL and id', () => {
      // GIVEN
      const id = '123';

      // WHEN
      service.get(id).subscribe();

      // THEN
      const req = httpMock.expectOne(`${environment.apiUrl}/fields/${id}`);
      expect(req.request.method).toBe('GET');
    });
  });

  describe('[post]', () => {
    it('should call POST with the correct URL and payload', () => {
      // WHEN
      service.post(fieldCreate).subscribe();

      // THEN
      const req = httpMock.expectOne(`${environment.apiUrl}/fields`);
      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual(fieldCreate);
    });
  });

  describe('put', () => {
    it('should call this.http.put with the correct URL and payload', () => {
      // GIVEN
      const field: Field = { id: '123', ...fieldCreate };

      // WHEN
      service.put(field).subscribe();

      // THEN
      const req = httpMock.expectOne(
        `${environment.apiUrl}/fields/${field.id}`
      );
      expect(req.request.method).toBe('PUT');
      expect(req.request.body).toEqual(field);
    });
  });

  describe('delete', () => {
    it('should call DELETE with the correct URL and id', () => {
      // GIVEN
      const id = '123';

      // WHEN
      service.delete(id).subscribe();

      // THEN
      const req = httpMock.expectOne(`${environment.apiUrl}/fields/${id}`);
      expect(req.request.method).toBe('DELETE');
    });
  });
});
