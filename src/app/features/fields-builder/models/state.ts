import { Nullable } from '~app/core/types/nullable';
import type { Field, FieldCreate } from './field';
import { FieldType } from './field-types';

export interface FieldsState {
  fields: {
    data?: Field[];
    loading: boolean;
    error?: any;
  };
  selected: {
    data?: Field;
    loading: boolean;
    error?: any;
  };
  create: {
    data?: Nullable<FieldCreate>;
    loading?: boolean;
    error?: any;
  };
  update: {
    data?: Nullable<Field>;
    loading?: boolean;
    error?: any;
  };
  delete?: {
    loading?: boolean;
    error?: any;
  };
  types: {
    data?: FieldType[];
    loading: boolean;
    error?: any;
  };
}
