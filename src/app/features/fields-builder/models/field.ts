import { FieldType, FieldTypeDefinition } from './field-types';
import { OrderOptions } from './order-options';

export interface BaseField extends FieldType {
  id: string;
  label: string;
  isRequired: boolean;
  type: FieldTypeDefinition;
}

export interface MultiselectField extends BaseField {
  choices: string[];
  order: OrderOptions;
  defaultValue: string;
  type: FieldTypeDefinition.Multiselect;
}

export type Field = MultiselectField;
export type FieldCreate = Omit<Field, 'id'>;
