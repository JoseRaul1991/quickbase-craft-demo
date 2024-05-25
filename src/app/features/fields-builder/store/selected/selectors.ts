import { createSelector } from '@ngrx/store';
import { FieldsState } from '~app/features/fields-builder/models/state';
import { selectAll } from '../../selectors';

export const selectSelectedField = createSelector(
  selectAll,
  (state: FieldsState) => state.selected.data
);

export const selectSelectedFieldLoading = createSelector(
  selectAll,
  (state: FieldsState) => state.selected.loading
);

export const selectSelectedFieldError = createSelector(
  selectAll,
  (state: FieldsState) => state.selected.error
);
