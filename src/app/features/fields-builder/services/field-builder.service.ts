import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Field, FieldCreate } from '../models/field';
import { environment } from '~env/environment';

@Injectable({
  providedIn: 'root',
})
export class FieldBuilderService {
  private http = inject(HttpClient);
  private readonly BASE_URL = `${environment.apiUrl}/fields`;

  list() {
    return this.http.get<Field[]>(`${this.BASE_URL}`);
  }

  get(id: string) {
    return this.http.get<Field>(`${this.BASE_URL}/${id}`);
  }

  post(field: FieldCreate) {
    return this.http.post<Field>(`${this.BASE_URL}`, field);
  }

  put(field: Field) {
    return this.http.put<Field>(`${this.BASE_URL}/${field.id}`, field);
  }

  delete(id: string) {
    return this.http.delete<Field>(`${this.BASE_URL}/${id}`);
  }
}
