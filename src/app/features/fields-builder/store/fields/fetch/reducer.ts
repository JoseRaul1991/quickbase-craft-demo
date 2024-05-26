import { on } from '@ngrx/store';
import { FieldsState } from '~app/features/fields-builder/models/state';
import { FieldsActions } from '../actions';

export const fieldsFetchReducer = [
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
