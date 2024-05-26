import { fetch, fetchError, fetchSuccess } from './fetch/actions';
import { create, createSuccess, createError } from './create/actions';
import { remove, removeSucess, removeError } from './delete/actions';
import { update, updateSuccess, updateError } from './update/actions';

export const FieldsActions = {
  fetch,
  fetchSuccess,
  fetchError,
  create,
  createSuccess,
  createError,
  update,
  updateSuccess,
  updateError,
  remove,
  removeSucess,
  removeError,
};
