import React from 'react';
import {Button as RNButton} from 'react-native-paper';
import {colors} from '../styles/colors';

type ButtonProps = {
  onPress: () => void;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({onPress, children}) => {
  return (
    <RNButton
      buttonColor={colors.button.primary.background}
      textColor={colors.button.primary.text}
      mode="contained"
      onPress={onPress}>
      {children}
    </RNButton>
  );
};

export default Button;
