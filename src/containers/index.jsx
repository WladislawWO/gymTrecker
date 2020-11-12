import React, { useState, useEffect } from 'react';
import Login from './Login';
import Workouts from './Workouts';
import Statistics from './Statistics';
import Profile from './Profile';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Router, Stack, Scene, Tabs, ActionConst } from 'react-native-router-flux';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';
import MenuTab from '../components/MenuTab';
import Registration from './Registration';
import { tokenLogin } from '../redux/actions/user';
import { userSelector } from '../redux/selectors/user';
import { useDispatch, useSelector } from 'react-redux';
import { AppLoading } from 'expo';

export default function Pages() {
  const [isFirst, setFirst] = useState(true);
  const [isLogined, setIsLogined] = useState(false);
  const { status } = useSelector(userSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(tokenLogin());
  }, []);

  useEffect(() => {
    if (isFirst && status){
      setFirst(false);
      if (status === 'success')
        setIsLogined(true);
    }
  }, [status]);
  if (isFirst)
    return <AppLoading />;

  return (
    <View style={[styles.cover]}>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <LinearGradient
        colors={['rgba(107,201,69,1)', 'rgba(34,173,92,1)']}
        style={styles.cover}
      />
      <Router sceneStyle={[styles.cover, styles.padding]}>
        <Scene key="root">
          <Scene key="login" component={Login} hideNavBar={true}/>
          <Scene key="registration" component={Registration} hideNavBar={true} />
          <Tabs
            key="main"
            tabs={true}
            hideNavBar={true}
            tabBarPosition='bottom'
            tabBarStyle={styles.tabBar}
            showLabel={false}
            initial={isLogined}
            type={ActionConst.RESET}
          >
            <Scene key="workouts" component={Workouts} hideNavBar={true} title="Workouts" icon={MenuTab} />
            <Scene key="statistics" component={Statistics} hideNavBar={true} title="Statistics" icon={MenuTab} />
            <Scene key="profile" component={Profile} hideNavBar={true} title="Profile" icon={MenuTab} />
          </Tabs>
        </Scene>
      </Router>
    </View>
  );
}
const styles = StyleSheet.create({
  cover: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#ffffff00',
    zIndex: 0
  },
  padding: {
    paddingTop: Constants.statusBarHeight / 2,
  },
  tabBar: {
    height: 60,
  }
});
