import axios from 'axios';
import { AsyncStorage } from 'react-native';

const api = axios.create();
api.defaults.baseURL = 'https://gym-tracker-be.herokuapp.com/';

const token = async () => await AsyncStorage.getItem('token');

if (token()) {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export default api;
