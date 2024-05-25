import { createAction, props } from '@ngrx/store';
import { Field } from '~app/features/fields-builder/models/field';

export const fetch = createAction('[Fields] Fetch Fields');
export const fetchSuccess = createAction(
  '[Fields] Fetch Fields Success',
  props<{ data: Field[] }>()
);
export const fetchError = createAction(
  '[Fields] Fetch Fields Error',
  props<{ error: any }>()
);

export const FieldsActions = {
  fetch,
  fetchSuccess,
  fetchError,
};
