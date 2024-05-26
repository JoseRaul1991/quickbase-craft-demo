import { createAction, props } from '@ngrx/store';
import { Field } from '~app/features/fields-builder/models/field';

export const update = createAction(
  '[Fields] Update Field',
  props<{ data: Field }>()
);

export const updateSuccess = createAction('[Fields] Update Field Success');

export const updateError = createAction(
  '[Fields] Update Field Error',
  props<{ error: any }>()
);
