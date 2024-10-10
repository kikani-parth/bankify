// CategoryScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import TransactionsList from '../components/TransactionsList';

const CategoryScreen = ({ route }) => {
  const { category } = route.params;

  return (
    <>
      <Text>Transactions</Text>
      <TransactionsList />
    </>
  );
};

const styles = StyleSheet.create({});

export default CategoryScreen;
