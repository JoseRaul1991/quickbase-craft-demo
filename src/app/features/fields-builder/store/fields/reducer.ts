import { on } from '@ngrx/store';
import { FieldsActions } from './actions';
import { FieldsState } from '~app/features/fields-builder/models/state';

export const fieldsReducer = [
  on(FieldsActions.fetch, (state: FieldsState) => ({
    ...state,
    fields: {
      loading: true,
      error: null,
    },
  })),
  on(FieldsActions.fetchSuccess, (state: FieldsState, { data }) => ({
    ...state,
    fields: {
      loading: false,
      data,
      error: null,
    },
  })),
  on(FieldsActions.fetchError, (state: FieldsState, { error }) => ({
    ...state,
    fields: {
      loading: false,
      error,
    },
  })),
];
