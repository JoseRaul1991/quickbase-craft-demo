import { on } from '@ngrx/store';
import { FieldTypesActions } from './actions';
import { FieldsState } from '~features/fields-builder/models';

export const typesReducer = [
  on(FieldTypesActions.fetch, (state: FieldsState) => ({
    ...state,
    types: {
      loading: true,
      error: null,
    },
  })),
  on(FieldTypesActions.fetchSuccess, (state: FieldsState, { data }) => ({
    ...state,
    types: {
      loading: false,
      data,
      error: null,
    },
  })),
  on(FieldTypesActions.fetchError, (state: FieldsState, { error }) => ({
    ...state,
    types: {
      loading: false,
      error,
    },
  })),
];
