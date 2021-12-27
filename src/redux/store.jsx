import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsApi';

const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
  devTools: process.env.NODE_ENV === 'development',
});

// eslint-disable-next-line import/no-anonymous-default-export
export default { store };
