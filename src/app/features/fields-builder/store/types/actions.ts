import { createAction, props } from '@ngrx/store';
import { FieldType } from '../../models';

export const fetch = createAction('[Fields] Fetch Types');
export const fetchSuccess = createAction(
  '[Fields] Fetch Types Success',
  props<{ data: FieldType[] }>()
);
export const fetchError = createAction(
  '[Fields] Fetch Types Error',
  props<{ error: unknown }>()
);

export const FieldTypesActions = {
  fetch,
  fetchSuccess,
  fetchError,
};
