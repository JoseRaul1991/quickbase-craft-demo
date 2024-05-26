import { createAction, props } from '@ngrx/store';
import { Nullable } from '~app/core/types/nullable';
import { Field } from '~app/features/fields-builder/models/field';

export const saveUpdate = createAction(
  '[Fields] Save Update',
  props<{ data: Nullable<Field> }>()
);

export const update = createAction(
  '[Fields] Update Field',
  props<{ data: Field }>()
);

export const updateSuccess = createAction('[Fields] Update Field Success');

export const updateError = createAction(
  '[Fields] Update Field Error',
  props<{ error: any }>()
);
