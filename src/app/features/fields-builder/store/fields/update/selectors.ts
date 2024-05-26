import { createSelector } from '@ngrx/store';
import { FieldsState } from '~app/features/fields-builder/models/state';
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
