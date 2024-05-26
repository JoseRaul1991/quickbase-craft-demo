import { Injectable, inject } from '@angular/core';
import { FieldBuilderService } from '../services/field-builder.service';
import { Actions } from '@ngrx/effects';
import { FieldTypesService } from '../services/field-types.service';

@Injectable()
export class BaseFieldsEffects {
  protected fieldsService = inject(FieldBuilderService);
  protected typesService = inject(FieldTypesService);
  protected actions$ = inject(Actions);
}
