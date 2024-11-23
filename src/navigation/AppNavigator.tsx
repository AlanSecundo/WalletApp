import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import WelcomeScreen from '../screens/WelcomeScreen';
import RegisterPINScreen from '../screens/RegisterPINScreen';
import screenNames from './screenNames';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import TransactionDetailsScreen from '../screens/TransactionDetailsScreen';

const Stack = createStackNavigator();
const initialRouteName = screenNames.welcome;
const defaultOptions = {
  headerShown: false,
};

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRouteName}>
        <Stack.Screen
          name={initialRouteName}
          component={WelcomeScreen}
          options={defaultOptions}
        />
        <Stack.Screen
          name={screenNames.registerPIN}
          component={RegisterPINScreen}
          options={defaultOptions}
        />
        <Stack.Screen
          name={screenNames.home}
          component={HomeScreen}
          options={defaultOptions}
        />
        <Stack.Screen
          name={screenNames.loginWithPIN}
          component={LoginScreen}
          options={defaultOptions}
        />
        <Stack.Screen
          name={screenNames.transactionDetails}
          component={TransactionDetailsScreen}
          options={defaultOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
