import { createSelector } from '@ngrx/store';
import { selectAll } from '../selectors';
import { FieldsState } from '~app/features/fields-builder/models/state';

export const selectFieldTypes = createSelector(
  selectAll,
  (state: FieldsState) => state.types.data
);

export const selectFieldTypesLoading = createSelector(
  selectAll,
  (state: FieldsState) => state.types.loading
);

export const selectFieldTypesError = createSelector(
  selectAll,
  (state: FieldsState) => state.types.error
);
