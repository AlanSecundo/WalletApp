import React, {useMemo} from 'react';
import {StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {formatMoney} from '../utils/formatMoney';
import {colors} from '../styles/colors';

const Balance = () => {
  const wallet = useSelector((state: RootState) => state.wallet);

  const fullBalance = useMemo(() => {
    if (wallet?.balance && wallet?.currency) {
      return formatMoney(wallet.balance, wallet.currency);
    }

    return 'Balance unavailable';
  }, [wallet.balance, wallet.currency]);

  return <Text style={styles.balance}>{fullBalance}</Text>;
};

const styles = StyleSheet.create({
  balance: {
    color: colors.text.light,
    fontSize: 36,
    fontWeight: 'bold',
  },
});

export default Balance;
