import React, { useState } from 'react';
import { Text } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import AuthenticationLayout from '../layouts/AuthenticationLayout';
import Button from '../components/Button';
import PINInput from '../components/PINInput';
import Card from '../components/Card';

import { typography } from '../styles/typography';
import screenNames from '../navigation/screenNames';
import pinService from '../services/pinService';

const EMPTY_VALUE = '';
const ERROR_INVALID_PIN = 'Invalid PIN, please try again';
const PIN_PROMPT = 'Please enter your 4-digit PIN to continue';

const LoginScreen = () => {
  const navigation = useNavigation<NavigationProp<string>>();
  
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState<string | undefined>();

  const handleSetValue = (code: string) => {
    if (error) setError(EMPTY_VALUE);
    setInputValue(code);
  };

  const validateToken = async () => {
    if (!(await pinService.isValidPIN(inputValue))) {
      setError(ERROR_INVALID_PIN);
      return;
    }
    navigation.navigate(screenNames.home);
  };

  const styles = typography();

  return (
    <AuthenticationLayout>
      <Card>
        <Text style={styles.title}>Welcome back!</Text>
        <Text style={styles.subtitle}>{PIN_PROMPT}</Text>

        <PINInput value={inputValue} setValue={handleSetValue} errorMessage={error} />
        <Button onPress={validateToken}>Secure login</Button>
      </Card>
    </AuthenticationLayout>
  );
};

export default LoginScreen;
