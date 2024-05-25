import { createAction, props } from '@ngrx/store';
import { Field } from '~app/features/fields-builder/models/field';

export const fetch = createAction(
  '[Fields] Fetch Selected Field',
  props<{ id: string }>()
);

export const fetchSuccess = createAction(
  '[Fields] Fetch Selected Field Success',
  props<{ data: Field }>()
);

export const fetchError = createAction(
  '[Fields] Fetch Selected Field Error',
  props<{ error: any }>()
);

export const SelectedFieldActions = {
  fetch,
  fetchSuccess,
  fetchError,
};