import { createSelector } from '@ngrx/store';
import { FieldsState } from '~features/fields-builder/models';
import { selectAll } from '../../selectors';

export const selectUpdateSavedForm = createSelector(
  selectAll,
  (state: FieldsState) => state.update?.data
);

export const selectUpdateLoading = createSelector(
  selectAll,
  (state: FieldsState) => state.update?.loading
);

export const selectUpdateError = createSelector(
  selectAll,
  (state: FieldsState) => state.update?.error
);
