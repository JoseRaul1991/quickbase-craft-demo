export enum FieldTypeDefinition {
  Multiselect = 'multi-select',
}

export interface FieldType {
  label: string;
  type: FieldTypeDefinition;
  description?: string;
}
