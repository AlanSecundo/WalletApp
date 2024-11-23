import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from '../styles/colors';

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({children}) => {
  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.background.light,
    borderRadius: 8,
    padding: 24,
    shadowColor: colors.defaultBlack,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    width: '100%',
  },
});

export default Card;
