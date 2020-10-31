import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import reducer from './reducers';

const middleware = getDefaultMiddleware();

middleware.push(logger);

const store = configureStore({
  reducer,
  middleware,
  devTools: true,
});

export default store;
