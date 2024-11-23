import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button} from 'react-native-paper';
import screenNames from '../navigation/screenNames';
import {StyleSheet} from 'react-native';
import {colors} from '../styles/colors';

const LogoutButton: React.FC = () => {
  const navigation = useNavigation<NavigationProp<string>>();

  const logout = () => {
    navigation.navigate(screenNames.welcome);
  };

  return (
    <Button mode="text" onPress={logout} labelStyle={styles.label}>
      Exit
    </Button>
  );
};

const styles = StyleSheet.create({
  label: {
    color: colors.text.light,
    fontSize: 20,
  },
});

export default LogoutButton;
