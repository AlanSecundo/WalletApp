import {configureStore} from '@reduxjs/toolkit';
import walletSlice from './slices/walletSlice';
import userSlice from './slices/userSlice';
import transactionsSlice from './slices/transactionsSlice';

const store = configureStore({
  reducer: {
    wallet: walletSlice,
    user: userSlice,
    transactions: transactionsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
