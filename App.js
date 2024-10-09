import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Tabs from './src/components/Tabs';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
    <HomeScreen />

    // <SafeAreaProvider>
    //   <NavigationContainer>
    //     {/* <Tabs /> */}
    //   </NavigationContainer>
    // </SafeAreaProvider>
  );
};

export default App;
