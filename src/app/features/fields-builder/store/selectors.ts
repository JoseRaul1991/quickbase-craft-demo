import { createFeatureSelector } from '@ngrx/store';
import { FieldsState } from '../models/state';
import { FIELDS_FEATURE_KEY } from './reducer';

export const selectAll = createFeatureSelector<FieldsState>(FIELDS_FEATURE_KEY);
