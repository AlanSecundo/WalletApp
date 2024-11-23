import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import IdiomFeedback from '../components/IdiomFeedback';
import Balance from '../components/Balance';
import walletService from '../services/walletService';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import userService from '../services/userService';
import TransactionList from '../components/TransactionList';
import LogoutButton from '../components/LogoutButton';
import {colors} from '../styles/colors';

const HomeScreen: React.FC = () => {
  const userName = useSelector((state: RootState) => state.user.name);

  useEffect(() => {
    userService.loadUser();
    walletService.loadBalance();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.infos}>
        <View style={styles.header}>
          <Text style={styles.name}>Welcome, {userName}</Text>
          <LogoutButton />
        </View>
        <View>
          <Text style={styles.balance}>Available Balance</Text>
          <Balance />
        </View>
      </View>
      <View style={styles.transactionsContainer}>
        <TransactionList />
      </View>
      <View style={styles.footer}>
        <IdiomFeedback />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.background.dark,
    height: '100%',
    width: '100%',
  },
  balance: {
    color: colors.text.light,
    fontSize: 24,
  },
  infos: {
    display: 'flex',
    justifyContent: 'space-between',
    color: colors.text.light,
    height: 200,
    padding: 24,
  },
  name: {
    color: colors.text.light,
    fontSize: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  transactionsContainer: {
    flex: 1,
    padding: 24,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: colors.background.light,
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background.dark,
    padding: 8,
  },
});

export default HomeScreen;
