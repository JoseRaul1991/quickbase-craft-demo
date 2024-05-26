import { createSelector } from '@ngrx/store';
import { FieldsState } from '~features/fields-builder/models';
import { selectAll } from '../../selectors';

export const selectFields = createSelector(
  selectAll,
  (state: FieldsState) => state.fields.data
);

export const selectFieldsLoading = createSelector(
  selectAll,
  (state: FieldsState) => state.fields.loading
);

export const selectFieldsError = createSelector(
  selectAll,
  (state: FieldsState) => state.fields.error
);
