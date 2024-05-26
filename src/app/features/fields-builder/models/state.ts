import { Nullable } from '~app/core/types/nullable';
import type { Field, FieldCreate } from './field';
import { FieldType } from './field-types';

export interface FieldsState {
  fields: {
    data?: Field[];
    loading: boolean;
    error?: unknown;
  };
  create: {
    data?: Nullable<FieldCreate>;
    loading?: boolean;
    error?: unknown;
  };
  update: {
    data?: Nullable<Field>;
    loading?: boolean;
    error?: unknown;
  };
  delete?: {
    loading?: boolean;
    error?: unknown;
  };
  types: {
    data?: FieldType[];
    loading: boolean;
    error?: unknown;
  };
}
