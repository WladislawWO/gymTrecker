import React from 'react';
import { Provider } from 'react-redux';
import Pages from './src/containers';
import store from './src/redux/store';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';

export default function App () {
  let [fontsLoaded] = useFonts({
    'MuseoSansRounded100': require('./src/assets/fonts/MuseoSansRounded100.otf'),
    'MuseoSansRounded300': require('./src/assets/fonts/MuseoSansRounded300.otf'),
    'MuseoSansRounded500': require('./src/assets/fonts/MuseoSansRounded500.otf'),
    'MuseoSansRounded700': require('./src/assets/fonts/MuseoSansRounded700.otf'),
    'MuseoSansRounded900': require('./src/assets/fonts/MuseoSansRounded900.otf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return(
      <Provider store={store}>
        <Pages />
      </Provider>
    );
  }
}
