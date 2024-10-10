import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

// Import logos
import zaraLogo from '../../assets/zara_logo.png';
import fortumLogo from '../../assets/fortum_logo.png';
import kMarketLogo from '../../assets/k-market_logo.png';
import TransactionDetail from './TransactionDetail';

const TransactionsList = () => {
  const transactions = [
    {
      name: 'Zara Kamppi',
      amount: '-39.90€',
      co2: '17 Kg',
      date: '09.10.2024',
      logo: zaraLogo,
      id: 1,
    },
    {
      name: 'Fortum Energy',
      amount: '-19.90€',
      co2: '66 Kg',
      date: '08.10.2024',
      logo: fortumLogo,
      id: 2,
    },
    {
      name: 'K-Citymarket Kamppi',
      amount: '-12.90€',
      co2: '13 Kg',
      date: '07.10.2024',
      logo: kMarketLogo,
      id: 3,
    },
    {
      name: 'Zara Kamppi',
      amount: '-20.90€',
      co2: '16 Kg',
      date: '07.10.2024',
      logo: zaraLogo,
      id: 4,
    },
    {
      name: 'K-Citymarket Kamppi',
      amount: '-10.00€',
      co2: '12 Kg',
      date: '06.10.2024',
      logo: kMarketLogo,
      id: 5,
    },
  ];

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={transactions}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <TransactionDetail transaction={item} />}
    />
  );
};

const styles = StyleSheet.create({});

export default TransactionsList;
