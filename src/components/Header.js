// Header.js

import React from 'react';
import { View, StyleSheet } from 'react-native';
import UserIcon from './UserIcon';
import TimeSpanSelector from './TimeSpanSelector';

const Header = () => {
  return (
    <View style={styles.container}>
      <UserIcon />
      <TimeSpanSelector />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // borderWidth: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
  },
});

export default Header;
