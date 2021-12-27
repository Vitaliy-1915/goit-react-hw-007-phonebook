import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './contacts-actions';

const items = createReducer([], {
  [actions.addContact]: (state, action) => [...state, action.payload],
  [actions.deleteContact]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (state, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});

// import { combineReducers } from 'redux';
// import { ADD, DELETE, CHANGE_FILTER } from './contacts-types';

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case ADD:
//       return state.find(s =>
//         s.name.toLowerCase().includes(payload.name.toLowerCase()),
//       )
//         ? alert(`${payload.name.toLowerCase()} is already in contacts`) ?? state
//         : [...state, payload];

//     case DELETE:
//       return state.filter(contact => contact.id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

// export default combineReducers({
//   items,
//   filter,
// });
