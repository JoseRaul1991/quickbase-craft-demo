import { createAction, props } from '@ngrx/store';

export const remove = createAction(
  '[Fields] Remove Field',
  props<{ id: string }>()
);

export const removeSucess = createAction('[Fields] Remove Field Success');

export const removeError = createAction(
  '[Fields] Remove Field Error',
  props<{ error: unknown }>()
);
