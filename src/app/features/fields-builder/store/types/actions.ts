import { createAction, props } from '@ngrx/store';
import { FieldType } from '../../models/field-types';

export const fetch = createAction('[Fields] Fetch Types');
export const fetchSuccess = createAction(
  '[Fields] Fetch Types Success',
  props<{ data: FieldType[] }>()
);
export const fetchError = createAction(
  '[Fields] Fetch Types Error',
  props<{ error: any }>()
);

export const FieldTypesActions = {
  fetch,
  fetchSuccess,
  fetchError,
};
