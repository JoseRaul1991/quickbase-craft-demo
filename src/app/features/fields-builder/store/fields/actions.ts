import { fetch, fetchError, fetchSuccess } from './fetch/actions';
import {
  create,
  createSuccess,
  createError,
  saveCreate,
} from './create/actions';
import { remove, removeSucess, removeError } from './delete/actions';
import {
  update,
  updateSuccess,
  updateError,
  saveUpdate,
} from './update/actions';

export const FieldsActions = {
  fetch,
  fetchSuccess,
  fetchError,
  saveCreate,
  create,
  createSuccess,
  createError,
  saveUpdate,
  update,
  updateSuccess,
  updateError,
  remove,
  removeSucess,
  removeError,
};
