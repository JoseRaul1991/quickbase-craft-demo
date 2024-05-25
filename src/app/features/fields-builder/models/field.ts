import { FieldType, FieldTypeDefinition } from './field-types';

export interface BaseField extends FieldType {
  id: string;
  label: string;
  required: boolean;
  type: FieldTypeDefinition;
}

export interface MultiselectField extends BaseField {
  choices: string[];
  displayAlpha: boolean;
  default: string;
  type: FieldTypeDefinition.Multiselect;
}

export type Field = MultiselectField;
