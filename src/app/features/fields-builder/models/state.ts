import { Nullable } from '~app/core/types/nullable';
import type { Field, FieldCreate } from './field';
import { FieldType } from './field-types';

export interface FieldsState {
  fields: {
    data?: Field[];
    loading: boolean;
    error?: never;
  };
  create: {
    data?: Nullable<FieldCreate>;
    loading?: boolean;
    error?: never;
  };
  update: {
    data?: Nullable<Field>;
    loading?: boolean;
    error?: never;
  };
  delete?: {
    loading?: boolean;
    error?: never;
  };
  types: {
    data?: FieldType[];
    loading: boolean;
    error?: never;
  };
}
