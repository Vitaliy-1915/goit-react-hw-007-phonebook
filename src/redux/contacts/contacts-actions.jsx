import { v4 as unId } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/add', value => {
  return {
    payload: {
      id: unId(),
      ...value,
    },
  };
});

export const deleteContact = createAction('contacts/delete');

export const changeFilter = createAction('contacts/changeFilter');

// import { v4 as unId } from 'uuid';
// import { ADD, DELETE, CHANGE_FILTER } from './contacts-types';

// export const addContact = value => ({
//   type: ADD,
//   payload: {
//     id: unId(),
//     ...value,
//   },
// });

// export const deleteContact = contactId => ({
//   type: DELETE,
//   payload: contactId,
// });

// export const changeFilter = value => ({
//   type: CHANGE_FILTER,
//   payload: value,
// });
