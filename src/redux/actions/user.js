import { createAsyncThunk } from '@reduxjs/toolkit';
import { AsyncStorage } from 'react-native';
import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import api from '../../utils/api';

const errorAlert = (message) => {
  Alert.alert(
    "Oops!",
    message,
    [
      { text: "TRY AGAIN", onPress: () => {} }
    ],
    { cancelable: true }
  );
};

export const registration = createAsyncThunk('user/registration', async (data) => {
  try {
    const res = await api.post('users/', data);
    if (res.data.status === 'error') {
      errorAlert(res.data.error);
      return { status: 'error' };
    } else {
      AsyncStorage.setItem('token', res.data.data.token);
      AsyncStorage.setItem('user', JSON.stringify(res.data.data.user));
      return { ...res.data.data, status: 'success' };
    }
  } catch (e) {
    errorAlert('Error');
    return null;
  }
});

export const login = createAsyncThunk('user/login', async (data) => {
  try {
    const res = await api.post('users/login/', data);
    if (res.data.status === 'error') {
      errorAlert(res.data.error);
      return { status: 'error' };
    } else {
      AsyncStorage.setItem('token', res.data.data.token);
      return { ...res.data.data, status: 'success' };
    }
  } catch (e) {
    errorAlert('Error');
    return null;
  }
});

export const logout = createAsyncThunk('user/logout', async () => {
  try {
    await api.post('users/logout/');
    await AsyncStorage.removeItem('token');
    Actions.login();
    return { 
      token: null,
      user: null,
      status: null
    };
  } catch (e) {
    Actions.login();
    return null;
  }
});

export const tokenLogin = createAsyncThunk('user/me', async () => {
  try {
    const res = await api.get('users/me/');
    if (res.data.status === 'error') {
      return { status: 'error' };
    } else {
      AsyncStorage.setItem('token', res.data.data.token);
      return { ...res.data.data, status: 'success' };
    }
  } catch (e) {
    console.log(e)
    return { status: 'error' };
  }
});
