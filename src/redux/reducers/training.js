import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  data: null
};

export default createReducer(initialState, {
  // [getCurrentWeather.rejected]: (state) => {
  //   return {
  //     ...state,
  //     current: null,
  //     history: state.current
  //       ? _uniq([state.current, ...state.history])
  //       : state.history,
  //   };
  // },
});
