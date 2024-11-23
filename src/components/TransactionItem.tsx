import React, {useMemo} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ITransactionResumed from '../services/contracts/ITransactionResumed';
import {formatMoney} from '../utils/formatMoney';
import {formatDate} from '../utils/formatDate';
import Chip from './Chip';
import screenNames from '../navigation/screenNames';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {getColorFromType} from '../utils/getColorFrom';
import InOutIcon from './InOutIcon';

type TransactionItemProps = {
  transaction: ITransactionResumed;
};

const TransactionItem: React.FC<TransactionItemProps> = ({transaction}) => {
  const navigation = useNavigation<NavigationProp<any>>();

  const value = useMemo(() => {
    if (transaction?.amount && transaction?.currency) {
      return formatMoney(transaction.amount, transaction.currency);
    }

    return '';
  }, [transaction.amount, transaction.currency]);

  const goToDetails = () => {
    navigation.navigate(screenNames.transactionDetails, {
      transactionId: transaction.id,
    });
  };

  return (
    <TouchableOpacity style={styles.mainContainer} onPress={goToDetails}>
      <View style={styles.left}>
        <InOutIcon type={transaction.type} />
        <View style={styles.column}>
          <Text style={styles.value}>{value}</Text>
          <Text style={styles.transaction}>{transaction.type}</Text>
        </View>
      </View>
      <View style={styles.right}>
        <Text style={styles.date}>{formatDate(transaction.date)}</Text>
        <Chip
          label={transaction.status}
          backgroundColor={getColorFromType(transaction.status)}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  left: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  column: {
    gap: 4,
  },
  right: {
    flex: 1,
    alignItems: 'flex-end',
    gap: 4,
  },
  value: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 16,
  },
  transaction: {
    textTransform: 'capitalize',
  },
});

export default TransactionItem;
