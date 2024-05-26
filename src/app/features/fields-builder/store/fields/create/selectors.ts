import { createSelector } from '@ngrx/store';
import { FieldsState } from '~app/features/fields-builder/models/state';
import { selectAll } from '../../selectors';

export const selectCreateLoading = createSelector(
  selectAll,
  (state: FieldsState) => state.create?.loading
);

export const selectCreateError = createSelector(
  selectAll,
  (state: FieldsState) => state.create?.error
);
