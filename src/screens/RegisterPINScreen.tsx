import React, {useState} from 'react';
import {Text} from 'react-native';
import AuthenticationLayout from '../layouts/AuthenticationLayout';
import Button from '../components/Button';
import {typography} from '../styles/typography';
import PINInput from '../components/PINInput';
import pinService from '../services/pinService';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import screenNames from '../navigation/screenNames';
import Card from '../components/Card';

const EMPTY_VALUE = '';

const RegisterPINScreen = () => {
  const navigation = useNavigation<NavigationProp<string>>();

  const [inputValue, setInputValue] = useState('');
  const [pin, setPIN] = useState<string>();
  const [error, setError] = useState<string>();

  const title = pin ? 'Confirm Your PIN' : 'Set Your PIN';
  const subTitle = pin
    ? 'Please re-enter your 4-digit PIN.'
    : 'Please enter your 4-digit PIN.';

  const goToHomeScreen = () => {
    navigation.navigate(screenNames.home);
  };

  const saveFirstPinInput = () => {
    setPIN(inputValue);
    setInputValue(EMPTY_VALUE);
  };

  const handleSetValue = (code: string) => {
    if (error) {
      setError(EMPTY_VALUE);
    }
    setInputValue(code);
  };

  const handleSavePin = async () => {
    if (pin !== inputValue) {
      return setError('PINs do not match. Please try again.');
    }

    await pinService.savePIN(pin);
    goToHomeScreen();
  };

  const handleSubmit = () => {
    if (pin) {
      return handleSavePin();
    }
    return saveFirstPinInput();
  };

  return (
    <AuthenticationLayout>
      <Card>
        <Text style={typography().title}>{title}</Text>
        <Text style={typography().subtitle}>{subTitle}</Text>

        <PINInput
          value={inputValue}
          setValue={handleSetValue}
          errorMessage={error}
        />
        <Button onPress={handleSubmit}>Confirm PIN</Button>
      </Card>
    </AuthenticationLayout>
  );
};

export default RegisterPINScreen;
