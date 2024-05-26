import { on } from '@ngrx/store';
import { FieldsState } from '~features/fields-builder/models';
import { FieldsActions } from '../actions';

export const fieldsDeleteReducer = [
  on(FieldsActions.remove, (state: FieldsState) => ({
    ...state,
    delete: {
      loading: true,
      error: null,
    },
  })),
  on(FieldsActions.removeSucess, (state: FieldsState) => ({
    ...state,
    delete: {
      loading: false,
      error: null,
    },
  })),
  on(FieldsActions.removeError, (state: FieldsState, { error }) => ({
    ...state,
    delete: {
      loading: false,
      error,
    },
  })),
];
