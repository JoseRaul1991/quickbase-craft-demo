import { createSelector } from '@ngrx/store';
import { FieldsState } from '~features/fields-builder/models';
import { selectAll } from '../../selectors';

export const selectCreateSavedForm = createSelector(
  selectAll,
  (state: FieldsState) => state.create?.data
);

export const selectCreateLoading = createSelector(
  selectAll,
  (state: FieldsState) => state.create?.loading
);

export const selectCreateError = createSelector(
  selectAll,
  (state: FieldsState) => state.create?.error
);
