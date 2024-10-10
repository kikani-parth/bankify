import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import TransactionsList from '../components/TransactionsList';
import CategoryOverview from '../components/CategoryOverview';
import SeeAllButton from '../components/SeeAllButton'; // Import the new button component

const CategoryScreen = ({ route }) => {
  const { category } = route.params;

  const [showAllTransactions, setShowAllTransactions] = useState(false);

  // Toggle the visibility of transactions
  const toggleTransactions = () => {
    setShowAllTransactions((prevState) => !prevState);
  };

  // Extracting the transactions
  let transactionsToShow;

  if (showAllTransactions) {
    transactionsToShow = category.transactions; // Show all transactions
  } else {
    if (category.transactions) {
      transactionsToShow = [category.transactions[0]]; // Show only the first transaction
    } else {
      transactionsToShow = []; // Fallback if no transactions exist
    }
  }

  return (
    <SafeAreaView>
      <CategoryOverview category={category} />
      <View style={styles.transactionsContainer}>
        <Text style={styles.transactionsText}>Transactions</Text>
        <TransactionsList listData={transactionsToShow} />

        {/* SEE ALL Button */}
        {!showAllTransactions &&
          category.transactions &&
          category.transactions.length > 1 && (
            <SeeAllButton onPress={toggleTransactions} />
          )}
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
