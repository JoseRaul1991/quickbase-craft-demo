import { Component, inject } from '@angular/core';
import { FieldTypeDefinition } from '../../models/field-types';
import { Store } from '@ngrx/store';
import { selectFieldTypes, selectFieldTypesError, selectFieldTypesLoading } from '../../store/types/selectors';

@Component({
  selector: 'app-field-create',
  templateUrl: './field-create.component.html',
  styleUrls: ['./field-create.component.scss'],
})
export class FieldCreateComponent {
  readonly DEMO_FIELD_TYPE = FieldTypeDefinition.Multiselect;

  private store = inject(Store);

  types$ = this.store.select(selectFieldTypes);
  loading$ = this.store.select(selectFieldTypesLoading);
  error$ = this.store.select(selectFieldTypesError);
}
