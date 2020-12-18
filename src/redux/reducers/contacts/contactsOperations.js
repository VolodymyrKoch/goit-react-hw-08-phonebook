import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
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
} from './contactsActions.js';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.Authorization = '';
  },
};

const register = credentials => dispatch => {
  dispatch(registerRequest());
  axios
    .post('/users/signup', credentials)
    .then(({ data }) => {
      dispatch(registerSuccess(data));
    })
    .catch(error => {
      dispatch(registerError(error));
    });
};

const login = credentials => dispatch => {
  dispatch(loginRequest());
  axios
    .post('/users/login', credentials)
    .then(({ data }) => {
      dispatch(loginSuccess(data));
    })
    .catch(error => {
      dispatch(loginError(error));
    });
};

const logout = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  dispatch(logoutRequest());
  token.set(persistedToken);

  axios
    .post('/users/logout')
    .then(() => {
      dispatch(logoutSuccess());
      token.unset();
    })
    .catch(error => {
      dispatch(logoutError(error));
    });
};

const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(getCurrentUserRequest());

  axios
    .get('/users/current')
    .then(({ data }) => {
      dispatch(getCurrentUserSuccess(data));
    })
    .catch(error => {
      dispatch(getCurrentUserError(error));
    });
};

// -------------------------------------------
const addContact = contac => dispatch => {
  dispatch(addContactRequest());
  axios
    .post('/contacts', { ...contac })
    .then(response => {
      dispatch(addContactSuccess(response.data));
    })
    .catch(error => {
      dispatch(addContactError(error.message));
    });
};

const getContacts = () => dispatch => {
  dispatch(getContactsRequest());
  axios
    .get('/contacts')
    .then(response => {
      dispatch(getContactsSuccess(response.data));
    })
    .catch(error => {
      console.log(error);
      dispatch(getContactsError(error.message));
      // setTimeout(() => {
      //   dispatch(erroMasage());
      // }, 1500);
    });
};

const removeContact = id => dispatch => {
  dispatch(removeContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => {
      dispatch(removeContactSuccess(id));
    })
    .catch(error => {
      dispatch(removeContactError(error.message));
      setTimeout(() => {
        dispatch(erroMasage());
      }, 1500);
    });
};

export {
  addContact,
  getContacts,
  removeContact,
  login,
  register,
  getCurrentUser,
  logout,
};
