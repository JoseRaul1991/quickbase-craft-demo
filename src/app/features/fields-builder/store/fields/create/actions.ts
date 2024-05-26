import { createAction, props } from '@ngrx/store';
import { Nullable } from '~app/core/types/nullable';
import { FieldCreate } from '~app/features/fields-builder/models/field';

export const saveCreate = createAction(
  '[Fields] Save Create Field',
  props<{ data: Nullable<FieldCreate> }>()
);

export const create = createAction(
  '[Fields] Create Field',
  props<{ data: FieldCreate }>()
);

export const createSuccess = createAction('[Fields] Create Field Success');

export const createError = createAction(
  '[Fields] Create Field Error',
  props<{ error: any }>()
);
