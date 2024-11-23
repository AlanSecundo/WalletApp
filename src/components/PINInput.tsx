import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  CodeField,
  Cursor,
  isLastFilledCell,
  MaskSymbol,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {colors} from '../styles/colors';

const CELL_QUANTITY = 4;

type PINInputProps = {
  value: string;
  setValue: (value: string) => void;
  errorMessage?: string;
};

const PINInput: React.FC<PINInputProps> = ({value, setValue, errorMessage}) => {
  const ref = useBlurOnFulfill({value, cellCount: CELL_QUANTITY});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const renderCell = ({
    index,
    symbol,
    isFocused,
  }: {
    index: number;
    symbol: string;
    isFocused: boolean;
  }) => {
    let textChild = null;

    if (symbol) {
      textChild = (
        <MaskSymbol
          maskSymbol="▪"
          isLastFilledCell={isLastFilledCell({index, value})}>
          {symbol}
        </MaskSymbol>
      );
    } else if (isFocused) {
      textChild = <Cursor />;
    }

    return (
      <Text
        key={index}
        style={[styles.cell, isFocused && styles.focusCell]}
        onLayout={getCellOnLayoutHandler(index)}>
        {textChild}
      </Text>
    );
  };

  return (
    <View style={styles.main}>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_QUANTITY}
        keyboardType="number-pad"
        rootStyle={styles.codeFieldRoot}
        textContentType="oneTimeCode"
        renderCell={renderCell}
      />
      <Text style={styles.errorMessage}>{errorMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    marginBottom: 24,
  },
  codeFieldRoot: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderBottomWidth: 2,
    borderColor: colors.transparentBlack,
    textAlign: 'center',
  },
  focusCell: {
    borderColor: colors.defaultBlack,
  },
  errorMessage: {
    color: colors.negativeText,
    minHeight: 20,
    textAlign: 'center',
    marginTop: 16,
    fontSize: 18,
  },
});

export default PINInput;
