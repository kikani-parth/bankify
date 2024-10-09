// HomeScreen.js

import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import SmartWaysCard from '../components/SmartWaysCard';

const HomeScreen = () => {
  return (
    <>
      <Image source={require('../../assets/sky.jpg')} style={styles.image} />
      <Header />
      <SmartWaysCard />
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
