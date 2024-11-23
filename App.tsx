import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import {Provider as NativePaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <NativePaperProvider>
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      </NativePaperProvider>
    </SafeAreaProvider>
  );
};

export default App;
