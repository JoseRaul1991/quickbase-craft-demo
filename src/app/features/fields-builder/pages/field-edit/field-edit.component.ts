import { Component, Input } from '@angular/core';
import { FIELDS_BUILDER_ROUTE } from '~app/core/constants';
import { FieldTypeDefinition } from '../../models/field-types';

@Component({
  selector: 'app-field-edit',
  templateUrl: './field-edit.component.html',
  styleUrls: ['./field-edit.component.scss'],
})
export class FieldEditComponent {
  @Input({ required: true }) type!: FieldTypeDefinition;

  readonly FIELD_TYPES = FieldTypeDefinition;
  FIELDS_BUILDER_ROUTE = FIELDS_BUILDER_ROUTE;
}
