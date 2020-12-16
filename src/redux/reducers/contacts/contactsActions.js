import { createAction } from '@reduxjs/toolkit';

const addContactRequest = createAction('ADD_CONTACT_REQUEST');
const addContactSuccess = createAction('ADD_CONTACT_SUCCESS');
const addContactError = createAction('ADD_CONTACT_ERROR');

const getContactsRequest = createAction('GET_CONTACTS_REQUEST');
const getContactsSuccess = createAction('GET_CONTACTS_SUCCESS');
const getContactsError = createAction('GET_CONTACTS_ERROR');

const removeContactRequest = createAction('REMOVE_CONTACT_REQUEST');
const removeContactSuccess = createAction('REMOVE_CONTACT_SUCCESS');
const removeContactError = createAction('REMOVE_CONTACT_ERROR');

const changeFilter = createAction('CHANGE_FILTER');
const erroMasage = createAction('ERROR_MESSAGE');

const registerRequest = createAction("contact/registerRequest");
const registerSuccess = createAction("contact/registerSuccess");
const registerError = createAction("contact/registerError");

const logoutRequest = createAction("contact/logoutRequest");
const logoutSuccess = createAction("contact/logoutSuccess");
const logoutError = createAction("contact/logoutError");

const loginRequest = createAction("contact/loginRequest");
const loginSuccess = createAction("contact/loginSuccess");
const loginError = createAction("contact/loginError");

const getCurrentUserRequest = createAction("contact/getCurrentUserRequest");
const getCurrentUserSuccess = createAction("contact/getCurrentUserSuccess");
const getCurrentUserError = createAction("contact/getCurrentUserError");


export {
  addContactRequest,
  addContactSuccess,
  addContactError,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  changeFilter,
  erroMasage,
  registerError,
  registerSuccess,
  registerRequest,
  loginRequest,
  loginSuccess,
  logoutError,
  logoutRequest,
  logoutSuccess,
  loginError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
};
