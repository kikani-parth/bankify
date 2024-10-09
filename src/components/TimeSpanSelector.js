// TimeSpanSelector.js

import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';

const TimeSpanSelector = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Monthly</Text>
      <FontAwesome
        name="caret-down"
        size={20}
        color="gray"
        style={styles.icon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderRadius: 25,
    backgroundColor: '#fff',
  },
  text: {
    marginRight: 8,
    color: 'gray',
  },
  icon: {},
});

export default TimeSpanSelector;
