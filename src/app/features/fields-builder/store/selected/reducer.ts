import { on } from '@ngrx/store';
import { SelectedFieldActions } from './actions';
import { FieldsState } from '~features/fields-builder/models';

export const selectedReducer = [
  on(SelectedFieldActions.fetch, (state: FieldsState) => ({
    ...state,
    selectedField: {
      loading: true,
      error: null,
    },
  })),
  on(SelectedFieldActions.fetchSuccess, (state: FieldsState, { data }) => ({
    ...state,
    selectedField: {
      loading: false,
      data,
      error: null,
    },
  })),
  on(SelectedFieldActions.fetchError, (state: FieldsState, { error }) => ({
    ...state,
    selectedField: {
      loading: false,
      error,
    },
  })),
];
