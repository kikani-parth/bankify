// SeeAllButton.js

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const SeeAllButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.seeAllButton} onPress={onPress}>
      <Text style={styles.seeAllText}>See All</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  seeAllButton: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  seeAllText: {
    color: '#007BFF',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default SeeAllButton;
