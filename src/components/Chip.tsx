import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../styles/colors';

type ChipProps = {
  label: string;
  backgroundColor?: string;
  color?: string;
};

const Chip: React.FC<ChipProps> = ({
  label,
  backgroundColor = colors.background.light,
  color = colors.text.dark,
}) => {
  return (
    <View style={[styles.mainContainer, {backgroundColor}]}>
      <Text style={[styles.chip, {color}]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  chip: {
    fontSize: 16,
    paddingHorizontal: 8,
    minWidth: 100,
    paddingVertical: 4,
    textTransform: 'capitalize',
    textAlign: 'center',
  },
});

export default Chip;
