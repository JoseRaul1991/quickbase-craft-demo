import { createReducer } from '@ngrx/store';
import { FieldsState } from '../models/state';
import { fieldsReducer } from './fields/reducer';
import { selectedReducer } from './selected/reducer';

export const FIELDS_FEATURE_KEY = 'fields';
export type FieldsStore = { [FIELDS_FEATURE_KEY]: FieldsState };

export const initialState: FieldsState = {
  fields: {
    loading: true,
  },
  selected: {
    loading: false,
  },
  types: {
    loading: true,
  },
};

export const reducer = createReducer(
  initialState,
  ...fieldsReducer,
  ...selectedReducer
);
