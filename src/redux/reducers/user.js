import { createReducer } from '@reduxjs/toolkit';
import { login, registration, logout, tokenLogin } from '../actions/user';

const initialState = {
  user: null,
  token: null,
  status: null,
};

export default createReducer(initialState, {
  [login.pending]: (state, { payload }) => {
    return {
      ...state,
      status: 'loading',
    };
  },
  [login.fulfilled]: (state, { payload }) => {
    return {
      ...state,
      ...payload,
    };
  },
  [registration.pending]: (state, { payload }) => {
    return {
      ...state,
      status: 'loading',
    };
  },
  [registration.fulfilled]: (state, { payload }) => {
    return {
      ...state,
      ...payload,
    };
  },
  [logout.fulfilled]: (state, { payload }) => {
    return {
      ...state,
      ...payload,
    };
  },
  [tokenLogin.fulfilled]: (state, { payload }) => {
    return {
      ...state,
      ...payload,
    };
  },
});
