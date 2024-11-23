import React, {useCallback, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import AuthenticationLayout from '../layouts/AuthenticationLayout';
import {typography} from '../styles/typography';
import Button from '../components/Button';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import screenNames from '../navigation/screenNames';
import pinService from '../services/pinService';
import Card from '../components/Card';

const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<string>>();

  const [loading, setLoading] = useState(true);

  const validatePin = useCallback(async () => {
    const hasPin = await pinService.hasPINRegistered();
    if (hasPin) {
      navigation.navigate(screenNames.loginWithPIN);
    }
    setLoading(false);
  }, [navigation]);

  const goToSetUpPinScreen = () => {
    navigation.navigate(screenNames.registerPIN);
  };

  useEffect(() => {
    validatePin();
  }, [validatePin]);

  return (
    <AuthenticationLayout>
      {!loading && (
        <Card>
          <View>
            <Text style={typography().title}>Welcome to Your Finance App</Text>
            <Text style={typography().subtitle}>
              To enhance security, please set up your unique PIN.
            </Text>
            <Button onPress={goToSetUpPinScreen}>Set Up PIN</Button>
          </View>
        </Card>
      )}
    </AuthenticationLayout>
  );
};

export default WelcomeScreen;
