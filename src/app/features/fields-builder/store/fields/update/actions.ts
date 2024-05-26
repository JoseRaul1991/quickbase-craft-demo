import { createAction, props } from '@ngrx/store';
import { Nullable } from '~core/types';
import { Field } from '~features/fields-builder/models';

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
