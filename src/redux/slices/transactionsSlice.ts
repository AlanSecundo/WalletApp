import {createSlice} from '@reduxjs/toolkit';
import ITransaction from '../../services/contracts/ITransaction';

interface TransactionsState {
  history: ITransaction[];
}

const initialState: TransactionsState = {
  history: [],
};

const transactiosSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    setTransactions: (state, action) => {
      state.history = action.payload;
    },
  },
});

export const {setTransactions} = transactiosSlice.actions;

export default transactiosSlice.reducer;
