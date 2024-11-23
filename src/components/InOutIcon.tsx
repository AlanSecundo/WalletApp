import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../styles/colors';
import transactionService from '../services/transactionService';

type InOutIconProps = {
  type: string | undefined;
  width?: number;
  fontSize?: number;
};

const InOutIcon: React.FC<InOutIconProps> = ({
  type,
  width = 42,
  fontSize = 26,
}) => {
  const containerStyle = [styles.baseContainer, {width: width, height: width}];
  const textStyle = [styles.withdrawText, {fontSize: fontSize}];

  const getInOrOut = () => {
    if (transactionService.isCashIn(type)) {
      return (
        <View style={[...containerStyle, styles.plusContainer]}>
          <Text style={styles.plusText}>+</Text>
        </View>
      );
    }
    if (transactionService.isCashOut(type)) {
      return (
        <View style={[...containerStyle, styles.withdrawContainer]}>
          <Text style={textStyle}>-</Text>
        </View>
      );
    }

    return null;
  };

  return <>{getInOrOut()}</>;
};

const styles = StyleSheet.create({
  baseContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    borderRadius: 100,
  },
  plusContainer: {
    backgroundColor: colors.positiveBakground,
  },
  withdrawContainer: {
    backgroundColor: colors.negativeBackground,
  },
  plusText: {
    color: colors.positiveText,
  },
  withdrawText: {
    color: colors.negativeText,
  },
});

export default InOutIcon;
