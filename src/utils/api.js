import axios from 'axios';
import { AsyncStorage } from 'react-native';

const api = axios.create();
api.defaults.baseURL = 'https://gym-tracker-be.herokuapp.com/';

api.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
);

export default api;
