import { on } from '@ngrx/store';
import { FieldsState } from '~features/fields-builder/models';
import { FieldsActions } from '../actions';

export const fieldsUpdateReducer = [
  on(FieldsActions.saveUpdate, (state: FieldsState, { data }) => ({
    ...state,
    update: { data },
  })),
  on(FieldsActions.update, (state: FieldsState) => ({
    ...state,
    update: {
      loading: true,
      error: null,
    },
  })),
  on(FieldsActions.updateSuccess, (state: FieldsState) => ({
    ...state,
    update: {
      loading: false,
      error: null,
    },
  })),
  on(FieldsActions.updateError, (state: FieldsState, { error }) => ({
    ...state,
    update: {
      loading: false,
      error,
    },
  })),
  on(FieldsActions.cleanUpdate, (state: FieldsState) => ({
    ...state,
    update: {
      loading: false,
      error: null,
    },
  })),
];
