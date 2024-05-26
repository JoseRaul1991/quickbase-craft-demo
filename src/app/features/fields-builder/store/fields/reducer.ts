import { fieldsFetchReducer } from './fetch/reducer';
import { fieldsCreateReducer } from './create/reducer';
import { fieldsDeleteReducer } from './delete/reducer';

export const fieldsReducer = [
  ...fieldsFetchReducer,
  ...fieldsCreateReducer,
  ...fieldsDeleteReducer,
];
