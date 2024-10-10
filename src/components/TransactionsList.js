// TransactionList.js

import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import TransactionDetail from './TransactionDetail';

const TransactionsList = ({ listData }) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={listData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <TransactionDetail transaction={item} />}
    />
  );
};

const styles = StyleSheet.create({});

export default TransactionsList;
