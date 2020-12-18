import { createSelector } from '@reduxjs/toolkit';

const getContact = state => state.auth.items;

const getFilter = state => state.auth.filter;

const getVisibleFilter = state => state.auth.items.length > 1;

const getError = state => state.auth.error;

const getFilteredItems = createSelector(
  [getContact, getFilter],
  (auth, filter) => {
    console.log(auth);
    return auth.filter(contactItem =>
      contactItem.name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);

export default {
  getContact,
  getFilteredItems,
  getVisibleFilter,
  getFilter,
  getError,
};
