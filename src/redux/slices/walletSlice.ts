import {createSlice} from '@reduxjs/toolkit';

interface WalletState {
  balance: number | null;
  currency: string | null;
}

const initialState: WalletState = {
  balance: null,
  currency: null,
};

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    setWallet: (state, action) => {
      state.balance = action.payload.balance;
      state.currency = action.payload.currency;
    },
  },
});

export const {setWallet} = walletSlice.actions;

export default walletSlice.reducer;
