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
