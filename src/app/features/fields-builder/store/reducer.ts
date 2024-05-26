import { createReducer } from '@ngrx/store';
import { FieldsState } from '../models/state';
import { fieldsReducer } from './fields/reducer';
import { typesReducer } from './types/reducer';

export const FIELDS_FEATURE_KEY = 'fields';
export type FieldsStore = { [FIELDS_FEATURE_KEY]: FieldsState };

export const initialState: FieldsState = {
  fields: {
    loading: true,
  },
  types: {
    loading: true,
  },
  create: {},
  update: {},
};

export const reducer = createReducer(
  initialState,
  ...fieldsReducer,
  ...typesReducer
);
