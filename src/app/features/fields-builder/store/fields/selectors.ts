import { createSelector } from '@ngrx/store';
import { selectAll } from '../selectors';
import { FieldsState } from '~app/features/fields-builder/models/state';

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

export const selectCreateLoading = createSelector(
  selectAll,
  (state: FieldsState) => state.create?.loading
);

export const selectCreateError = createSelector(
  selectAll,
  (state: FieldsState) => state.create?.error
);

export const selectDeleteLoading = createSelector(
  selectAll,
  (state: FieldsState) => state.delete?.loading
);

export const selectDeleteError = createSelector(
  selectAll,
  (state: FieldsState) => state.delete?.error
);
