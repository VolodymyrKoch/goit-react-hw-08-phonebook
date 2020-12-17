import { createReducer } from '@reduxjs/toolkit';
import {
  getCurrentUserError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  loginError,
  loginRequest,
  loginSuccess,
  logoutError,
  logoutRequest,
  logoutSuccess,
  registerError,
  registerRequest,
  registerSuccess,
  addContactSuccess,
  getContactsSuccess,
  removeContactSuccess,
  changeFilter,
} from '../contacts/contactsActions.js';

import { combineReducers } from 'redux';


const initialState = {
  user: {
    name: null,
    email: null,
  },
  error: null,
  token: null,
  items: [],
  filter: '',
  erroMasage: '',
};

const user = createReducer(initialState.user, {
  [loginSuccess]: (_, { payload }) => payload.user,
  [registerSuccess]: (_, { payload }) => payload.user,
  [getCurrentUserSuccess]: (_, { payload }) => payload,
  [logoutSuccess]: () => initialState.user,
});

const token = createReducer(initialState.token, {
  [loginSuccess]: (_, { payload }) => payload.token,
  [registerSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => initialState.token,
});

const handleError = () => initialState.error;

const error = createReducer(initialState.error, {
  [loginRequest]: handleError,
  [logoutRequest]: handleError,
  [registerRequest]: handleError,
  [getCurrentUserRequest]: handleError,
  [loginError]: (_, { payload }) => payload,
  [logoutError]: (_, { payload }) => payload,
  [registerError]: (_, { payload }) => payload,
  [getCurrentUserError]: (_, { payload }) => payload,
});
// ----with Toolkit----
const CreateAddContact = (state, action) => {
  return [...state, { ...action.payload }];
};
const CreateRemoveContact = (state, action) => {
  return state.filter(item => {
    return item.id !== action.payload;
  });
};

const itemsCreateReducer = createReducer(initialState.items, {
  [getContactsSuccess]: (state, action) => action.payload,
  [addContactSuccess]: CreateAddContact,
  [removeContactSuccess]: CreateRemoveContact,
});

const filterCreateReducer = createReducer(initialState.filter, {
  [changeFilter]: (state, action) => action.payload,
});

export const contactsReducer = combineReducers({
  items: itemsCreateReducer,
  filter: filterCreateReducer,
  user: user,
  token: token,
  error: error,
});

