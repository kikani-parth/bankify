// CategoryScreen.js

import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import TransactionsList from '../components/TransactionsList';
import CategoryOverview from '../components/CategoryOverview';

const CategoryScreen = ({ route }) => {
  const { category } = route.params;

  return (
    <SafeAreaView>
      <CategoryOverview category={category} />
      <View style={styles.transactionsContainer}>
        <Text style={styles.transactionsText}>Transactions</Text>
        <TransactionsList />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  transactionsContainer: {},
  transactionsText: {
    color: '#B2BEB5',
    fontWeight: 'bold',
    fontSize: 17,
    marginLeft: 20,
    marginTop: 50,
    marginBottom: 20,
  },
});

export default CategoryScreen;
