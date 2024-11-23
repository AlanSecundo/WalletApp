import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {colors} from '../styles/colors';
interface AuthenticationLayoutProps {
  children: React.ReactNode;
}

const AuthenticationLayout: React.FC<AuthenticationLayoutProps> = ({
  children,
}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo-recarga.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.primary,
    flex: 1,
    paddingTop: 100,
    alignItems: 'center',
    fontSize: 16,
    padding: 16,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});

export default AuthenticationLayout;
