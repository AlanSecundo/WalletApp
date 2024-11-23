import tracker from '../config/tracker';
import {setWallet} from '../redux/slices/walletSlice';
import store from '../redux/store';
import apiService from './apiService';

const loadBalance = async (): Promise<void> => {
  try {
    tracker.trackEvent('Calling loadBalance');
    const response = await apiService.get('/balance');

    const {balance, currency} = response.data;

    store.dispatch(setWallet({balance, currency}));
  } catch (error) {
    tracker.trackError('Failure on loadBalance', error);
  }
};

const walletService = {
  loadBalance,
};

export default walletService;
