import {StyleSheet} from 'react-native';

export const typography = (color: string = '#000') => {
  return StyleSheet.create({
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: color,
      textAlign: 'center',
      marginTop: 16,
      marginBottom: 16,
    },
    subtitle: {
      fontSize: 16,
      color: color,
      textAlign: 'center',
      marginBottom: 24,
      fontWeight: 500,
    },
  });
};
