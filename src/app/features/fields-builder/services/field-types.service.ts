import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '~env/environment';
import { FieldType } from '../models/field-types';

@Injectable({
  providedIn: 'root',
})
export class FieldTypesService {
  private http = inject(HttpClient);
  private readonly BASE_URL = `${environment.apiUrl}/field-types`;

  list() {
    return this.http.get<FieldType[]>(`${this.BASE_URL}`);
  }
}
