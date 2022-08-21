import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addContact: (state, { payload }) => {
      state.items.push(payload);
    },

    removeContact: (state, { payload }) => {
      state.items = state.items.filter(({ id }) => id !== payload);
    },

    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

// ACTIONS

export const { addContact, removeContact, setFilter } = contactsSlice.actions;
