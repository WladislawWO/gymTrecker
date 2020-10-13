import React from 'react';
import Login from './Login';
import {Router, Stack, Scene} from 'react-native-router-flux'
import Home from './Home'
import RegistrationForm from './RegistrationForm'
// import CreateNewTrain from './CreateNewTrain'

export default function Pages() {
  return (
    <Router>
      <Stack key="root">
        <Scene key="login" component={Login} title="Login" />
        <Scene key="home" component={Home} title="Home" />
        <Scene key="regist" component={RegistrationForm} title="Registration" />
        {/* <Scene key="create" component={CreateNewTrain} title="Create new train" /> */}

      </Stack>
    </Router>
  );
}
