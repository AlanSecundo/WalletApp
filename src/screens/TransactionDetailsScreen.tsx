import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import useAsync from '../hooks/useAsync';
import transactionService from '../services/transactionService';
import ITransaction from '../services/contracts/ITransaction';
import {ActivityIndicator} from 'react-native-paper';
import {colors} from '../styles/colors';
import {formatMoney} from '../utils/formatMoney';
import {formatDate} from '../utils/formatDate';
import Chip from '../components/Chip';
import {getColorFromType} from '../utils/getColorFrom';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import InOutIcon from '../components/InOutIcon';

type TransactionDetailsScreenProps = {
  route: {
    params: {
      transactionId: string;
    };
  };
};

const TransactionDetailsScreen: React.FC<TransactionDetailsScreenProps> = ({
  route,
}) => {
  const {transactionId} = route.params;
  const navigation = useNavigation<NavigationProp<string>>();

  const [transactionDetails, setTransactionDetails] = useState<ITransaction>();

  const amount = transactionDetails?.amount
    ? formatMoney(transactionDetails?.amount, transactionDetails?.currency)
    : 'Unavailable Amount';

  const date = transactionDetails?.date
    ? formatDate(transactionDetails?.date)
    : 'Unavailable Date';

  const origemLabel = transactionService.isCashIn(transactionDetails?.type)
    ? 'From'
    : 'To';

  const handleBack = () => {
    navigation.goBack();
  };

  const {loading, call: loadTransactionDetails} = useAsync(async () => {
    const details = await transactionService.getTransactionDetailsById(
      transactionId,
    );

    if (!details) {
      return handleBack();
    }

    setTransactionDetails(details);
  }, [transactionId]);

  useEffect(() => {
    loadTransactionDetails();
  }, [loadTransactionDetails]);

  const renderStatus = () => {
    if (!transactionDetails?.status) {
      return null;
    }

    return (
      <Chip
        label={transactionDetails?.status}
        backgroundColor={getColorFromType(transactionDetails?.status)}
      />
    );
  };

  const renderType = () => {
    if (!transactionDetails?.type) {
      return null;
    }

    return (
      <Chip
        label={transactionDetails?.type}
        backgroundColor={colors.transparentBlack}
      />
    );
  };

  const renderRow = (label: string, value: any) => {
    if (!value) {
      return null;
    }

    return (
      <View style={styles.row}>
        <Text style={styles.rowLabel}>{label}</Text>
        <Text style={styles.rowText}>{value}</Text>
      </View>
    );
  };

  const renderComponent = () => {
    if (loading) {
      return <ActivityIndicator animating={true} />;
    }

    return (
      <>
        <View style={styles.header}>
          <Text style={styles.headerText}>Transaction Details</Text>
          <TouchableOpacity onPress={handleBack}>
            <Text style={styles.headerText}>Go back</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.details}>
          <View style={styles.mainDetails}>
            <View style={styles.amoutContainer}>
              <InOutIcon type={transactionDetails?.type} width={48} />
              <Text style={styles.amount}>{amount}</Text>
            </View>
            <Text style={styles.date}>{date}</Text>
            <View style={styles.miniDetails}>
              {renderStatus()}
              {renderType()}
            </View>
          </View>
          <View style={styles.otherDetails}>
            {renderRow(origemLabel, transactionDetails?.toAccount?.name)}
            {renderRow('Account', transactionDetails?.toAccount?.accountNumber)}
            {renderRow('Fee', transactionDetails?.fee)}
            {renderRow('Description', transactionDetails?.description)}
            {renderRow('Card Number', transactionDetails?.creditCard?.number)}
            {renderRow('Card Brand', transactionDetails?.creditCard?.brand)}
            {renderRow('ID Transaction', transactionDetails?.id)}
          </View>
        </View>
      </>
    );
  };

  return <View style={styles.mainContainer}>{renderComponent()}</View>;
};

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.background.dark,
  },
  miniDetails: {
    flexDirection: 'row',
    gap: 8,
  },
  amoutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginLeft: -48,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
    minHeight: 80,
  },
  headerText: {
    color: colors.text.light,
    fontSize: 20,
  },
  details: {
    backgroundColor: colors.background.light,
    flex: 1,
    paddingVertical: 24,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    width: '100%',
  },
  mainDetails: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 36,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.light,
  },
  amount: {
    fontSize: 40,
  },
  date: {
    fontSize: 16,
  },
  otherDetails: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.light,
  },
  rowText: {
    fontSize: 18,
  },
  rowLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TransactionDetailsScreen;
