// HomeScreen.js

import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import SmartWaysCard from '../components/SmartWaysCard';
import TransactionsList from '../components/TransactionsList';
import Spacer from '../components/Spacer';
import CategoriesList from '../components/CategoriesList';

const HomeScreen = () => {
  return (
    <>
      <Image source={require('../../assets/sky.jpg')} style={styles.image} />
      <Header />
      <SmartWaysCard />
      <Spacer />
      <CategoriesList />
      {/* <TransactionsList /> */}
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
