import { createAction, props } from '@ngrx/store';
import { FieldCreate } from '~app/features/fields-builder/models/field';

export const create = createAction(
  '[Fields] Create Field',
  props<{ data: FieldCreate }>()
);

export const createSuccess = createAction('[Fields] Create Field Success');

export const createError = createAction(
  '[Fields] Create Field Error',
  props<{ error: any }>()
);
