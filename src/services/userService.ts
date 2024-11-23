import tracker from '../config/tracker';
import {setName} from '../redux/slices/userSlice';
import store from '../redux/store';
import apiService from './apiService';

const loadUser = async (): Promise<void> => {
  try {
    tracker.trackEvent('Calling loadUser');
    const response = await apiService.get('/user');

    const {name} = response.data;

    store.dispatch(setName(name));
  } catch (error) {
    tracker.trackError('Failure on loadUser', error);
  }
};

const userService = {
  loadUser,
};

export default userService;
