// UserIcon.js

import React from 'react';
import { StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const UserIcon = () => {
  return (
    <FontAwesome
      name="user-circle-o"
      size={33}
      color="#353935"
      style={styles.userIcon}
    />
  );
};

const styles = StyleSheet.create({
  userIcon: {},
});

export default UserIcon;
