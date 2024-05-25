export enum FieldTypeDefinition {
  Multiselect = 'Multi-select',
}

export interface FieldType {
  label: string;
  type: FieldTypeDefinition;
}
