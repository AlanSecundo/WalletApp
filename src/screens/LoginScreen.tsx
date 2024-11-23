import React, {useState} from 'react';
import {Text} from 'react-native';
import AuthenticationLayout from '../layouts/AuthenticationLayout';
import Button from '../components/Button';
import {typography} from '../styles/typography';
import PINInput from '../components/PINInput';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import screenNames from '../navigation/screenNames';
import pinService from '../services/pinService';
import Card from '../components/Card';

const EMPTY_VALUE = '';

const LoginScreen = () => {
  const navigation = useNavigation<NavigationProp<string>>();

  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState<string>();

  const goToHomeScreen = () => {
    navigation.navigate(screenNames.home);
  };

  const handleSetValue = (code: string) => {
    if (error) {
      setError(EMPTY_VALUE);
    }
    setInputValue(code);
  };

  const validateToken = async () => {
    const isValidPin = await pinService.isValidPIN(inputValue);

    if (!isValidPin) {
      setError('Invalid PIN, please try again');
      return;
    }
    goToHomeScreen();
  };

  return (
    <AuthenticationLayout>
      <Card>
        <Text style={typography().title}>Welcome back!</Text>
        <Text style={typography().subtitle}>
          Please enter your 4-digit PIN to continue
        </Text>

        <PINInput
          value={inputValue}
          setValue={handleSetValue}
          errorMessage={error}
        />
        <Button onPress={validateToken}>Secure login</Button>
      </Card>
    </AuthenticationLayout>
  );
};

export default LoginScreen;
