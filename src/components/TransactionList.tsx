import React, {useEffect, useState} from 'react';
import transactionService from '../services/transactionService';
import useAsync from '../hooks/useAsync';
import ITransactionResumed from '../services/contracts/ITransactionResumed';
import {ActivityIndicator} from 'react-native-paper';
import {ScrollView, StyleSheet, View} from 'react-native';
import TransactionItem from './TransactionItem';

const TransactionList = () => {
  const [transactions, setTransactions] = useState<ITransactionResumed[]>([]);

  const {loading, call: loadTransactions} = useAsync(async () => {
    const transactionList = await transactionService.getTransactionHistory();
    setTransactions(transactionList);
  }, []);

  useEffect(() => {
    loadTransactions();
  }, [loadTransactions]);

  return (
    <ScrollView
      style={styles.mainContainer}
      showsVerticalScrollIndicator={false}>
      {loading ? (
        <ActivityIndicator animating={true} />
      ) : (
        <View style={styles.listContainer}>
          {transactions.map(transaction => (
            <TransactionItem key={transaction.id} transaction={transaction} />
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
  },
  listContainer: {
    gap: 32,
  },
});

export default TransactionList;
