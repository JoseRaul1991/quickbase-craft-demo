import { on } from '@ngrx/store';
import { FieldsState } from '~app/features/fields-builder/models/state';
import { FieldsActions } from '../actions';

export const fieldsCreateReducer = [
  on(FieldsActions.saveCreate, (state: FieldsState, { data }) => ({
    ...state,
    create: {
      data,
    },
  })),
  on(FieldsActions.create, (state: FieldsState) => ({
    ...state,
    create: {
      loading: true,
      error: null,
    },
  })),
  on(FieldsActions.createSuccess, (state: FieldsState) => ({
    ...state,
    create: {
      loading: false,
      error: null,
    },
  })),
  on(FieldsActions.createError, (state: FieldsState, { error }) => ({
    ...state,
    create: {
      loading: false,
      error,
    },
  })),
];
