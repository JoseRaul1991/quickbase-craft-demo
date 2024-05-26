import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { FieldBuilderService } from '../services/field-builder.service';

@Injectable({
  providedIn: 'root',
})
export class FieldResolver {
  private fieldBuilderService = inject(FieldBuilderService);

  resolve(route: ActivatedRouteSnapshot) {
    const { id } = route.params;
    return this.fieldBuilderService.get(id);
  }
}
