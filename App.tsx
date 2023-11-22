import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigator from './src/navigation/MainStackNavigator';
import Snackbar from './src/components/core/snack-bar';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MainStackNavigator />
        <Snackbar />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
