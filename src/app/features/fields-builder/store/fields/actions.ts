import { createAction, props } from '@ngrx/store';
import { Field, FieldCreate } from '~app/features/fields-builder/models/field';

// Fetch
export const fetch = createAction('[Fields] Fetch Fields');
export const fetchSuccess = createAction(
  '[Fields] Fetch Fields Success',
  props<{ data: Field[] }>()
);
export const fetchError = createAction(
  '[Fields] Fetch Fields Error',
  props<{ error: any }>()
);

// Create
export const create = createAction(
  '[Fields] Create Field',
  props<{ data: FieldCreate }>()
);

export const createSuccess = createAction('[Fields] Create Field Success');

export const createError = createAction(
  '[Fields] Create Field Error',
  props<{ error: any }>()
);

// Update
export const update = createAction(
  '[Fields] Update Field',
  props<{ data: Field }>()
);

export const updateSuccess = createAction('[Fields] Update Field Success');

export const updateError = createAction(
  '[Fields] Update Field Error',
  props<{ error: any }>()
);

// Delete
export const remove = createAction(
  '[Fields] Remove Field',
  props<{ id: string }>()
);

export const removeSucess = createAction('[Fields] Remove Field Success');

export const removeError = createAction(
  '[Fields] Remove Field Error',
  props<{ error: any }>()
);

export const FieldsActions = {
  fetch,
  fetchSuccess,
  fetchError,
  create,
  createSuccess,
  createError,
  update,
  updateSuccess,
  updateError,
  remove,
  removeSucess,
  removeError,
};
