import React from 'react';
import { Provider } from 'react-redux';
import Pages from './src/containers';
import store from './src/redux/store';

export default function App () {
  return(
    <Provider store={store}>
      <Pages />
    </Provider>
  );
}
