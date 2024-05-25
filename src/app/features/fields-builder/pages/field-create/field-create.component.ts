import { Component, signal } from '@angular/core';
import { FieldTypeDefinition } from '../../models/field-types';

@Component({
  selector: 'app-field-create',
  templateUrl: './field-create.component.html',
  styleUrls: ['./field-create.component.scss'],
})
export class FieldCreateComponent {
  readonly DEMO_FIELD_TYPE = FieldTypeDefinition.Multiselect;

  elements = signal<string[]>([
    'choice 1',
    'choice 2',
    'choice 3',
    'choice 4',
    'choice 5',
  ]);
}
