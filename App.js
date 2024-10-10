import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
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
