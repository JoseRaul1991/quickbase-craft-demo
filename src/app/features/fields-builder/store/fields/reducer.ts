import { fieldsFetchReducer } from './fetch/reducer';
import { fieldsCreateReducer } from './create/reducer';
import { fieldsDeleteReducer } from './delete/reducer';
import { fieldsUpdateReducer } from './update/reducer';

export const fieldsReducer = [
  ...fieldsFetchReducer,
  ...fieldsCreateReducer,
  ...fieldsDeleteReducer,
  ...fieldsUpdateReducer,
];
