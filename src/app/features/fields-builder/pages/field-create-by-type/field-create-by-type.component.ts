import { Component, Input } from '@angular/core';
import { FieldTypeDefinition } from '../../models/field-types';

@Component({
  selector: 'app-field-create-by-type',
  templateUrl: './field-create-by-type.component.html',
  styleUrls: ['./field-create-by-type.component.scss'],
})
export class FieldCreateByTypeComponent {
  @Input({ required: true }) type!: FieldTypeDefinition;

  readonly FIELD_TYPES = FieldTypeDefinition;
}
