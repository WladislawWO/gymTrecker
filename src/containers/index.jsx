import React from 'react';
import Login from './Login';
import {Router, Stack, Scene} from 'react-native-router-flux'

export default function Pages() {
  return (
    <Router>
      <Stack key="root">
        <Scene key="login" component={Login} title="Login" />
      </Stack>
    </Router>
  );
}
