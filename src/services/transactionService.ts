import tracker from '../config/tracker';
import {setTransactions} from '../redux/slices/transactionsSlice';
import store from '../redux/store';
import {sortByDate} from '../utils/sortByDate';
import apiService from './apiService';
import ITransaction from './contracts/ITransaction';
import ITransactionResumed from './contracts/ITransactionResumed';

const transactionTypes = {
  withdrawal: 'withdrawal',
  transfer: 'transfer',
  payment: 'payment',
  deposit: 'deposit',
};

const getTransactionHistory = async (): Promise<ITransactionResumed[]> => {
  try {
    tracker.trackEvent('Calling getTransactionHistory');
    const response = await apiService.get('/transactions-history');

    return sortByDate(response.data, 'desc');
  } catch (error) {
    tracker.trackError('Failure on getTransactionHistory', error);
    return [];
  }
};

const fetchTransactions = async (): Promise<ITransaction[]> => {
  try {
    tracker.trackEvent('Calling fetchTransactions');
    const response = await apiService.get('/transactions');

    return response.data ?? [];
  } catch (error) {
    tracker.trackError('Failure on fetchTransactions', error);
    return [];
  }
};

const findTransactionById = (
  transactions: ITransaction[],
  transactionId: string,
): ITransaction | null => {
  const transactionFound = transactions.find(
    transaction => transaction.id === transactionId,
  );

  return transactionFound ?? null;
};

const getTransactionDetailsById = async (
  transactionId: string,
): Promise<ITransaction | null> => {
  try {
    tracker.trackEvent('Calling getTransactionDetailsById');
    const globalState = store.getState();

    if (globalState?.transactions?.history.length > 0) {
      return findTransactionById(
        globalState.transactions.history,
        transactionId,
      );
    }

    const transactions = await fetchTransactions();
    store.dispatch(setTransactions(transactions));

    return findTransactionById(transactions, transactionId);
  } catch (error) {
    tracker.trackError('Failure on getTransactionDetailsById', error);
    return null;
  }
};
const isCashIn = (type: string | undefined) =>
  type === transactionTypes.deposit;

const isCashOut = (type: string | undefined) => {
  return (
    type === transactionTypes.withdrawal ||
    type === transactionTypes.transfer ||
    type === transactionTypes.payment
  );
};

const transactionService = {
  getTransactionHistory,
  getTransactionDetailsById,
  isCashIn,
  isCashOut,
};

export default transactionService;
