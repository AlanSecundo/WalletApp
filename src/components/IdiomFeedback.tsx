import React from 'react';
import {StyleSheet, Text} from 'react-native';

import NativeIdiom from '../../specs/NativeIdiom';
import {colors} from '../styles/colors';

const IdiomFeedback = () => {
  const idiom = NativeIdiom?.getCurrentIdiom();

  return (
    <>
      {idiom && (
        <Text style={styles.footerText}>
          Your phone language is set to {idiom}
        </Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  footerText: {
    color: colors.text.light,
    fontSize: 16,
  },
});

export default IdiomFeedback;
