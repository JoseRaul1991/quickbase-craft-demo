import { createAction, props } from '@ngrx/store';
import { Nullable } from '~core/types';
import { FieldCreate } from '~features/fields-builder/models';

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
  props<{ error: unknown }>()
);
