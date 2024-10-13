// HomeScreen.js

import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import Header from '../components/Header';
import SmartWaysCard from '../components/SmartWaysCard';
import TransactionsList from '../components/TransactionsList';
import Spacer from '../components/Spacer';
import CategoriesList from '../components/CategoriesList';
import ToggleButtons from '../components/ToggleButtons';
import { transactions, categories } from '../../_mockData';
import CustomPieChart from '../components/CustomPieChart';

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState('categories'); // Track the active tab

  return (
    <>
      <Image source={require('../../assets/sky.jpg')} style={styles.image} />
      <Header />
      <SmartWaysCard />
      <Spacer />
      <CustomPieChart />
      {/* Render the tabs */}
      <ToggleButtons activeTab={activeTab} onPressTab={setActiveTab} />

      {/* Render CategoriesList or TransactionsList based on the active tab */}
      {activeTab === 'categories' ? (
        <CategoriesList listData={categories} />
      ) : (
        <TransactionsList listData={transactions} />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    height: '45%',
    width: '100%',
  },
});

export default HomeScreen;
