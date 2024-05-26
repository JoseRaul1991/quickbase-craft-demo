import { createSelector } from '@ngrx/store';
import { FieldsState } from '~features/fields-builder/models';
import { selectAll } from '../../selectors';

export const selectDeleteLoading = createSelector(
  selectAll,
  (state: FieldsState) => state.delete?.loading
);

export const selectDeleteError = createSelector(
  selectAll,
  (state: FieldsState) => state.delete?.error
);
