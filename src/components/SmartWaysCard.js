import React from 'react';
import { View, Image, Text, StyleSheet, Platform } from 'react-native';

const SmartWaysCard = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/plant.jpg')} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.heading}>#100smartways</Text>
        <Text style={styles.textContent}>
          Discover 100 smart ways to live more sustainable
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    position: 'absolute',
    top: 330,

    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.13,
    shadowRadius: 10,

    // Elevation for Android
    ...Platform.select({
      android: {
        elevation: 8,
      },
    }),
  },
  image: {
    width: 120,
    height: 120,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 10,
  },
  textContent: {
    color: 'gray',
  },
});

export default SmartWaysCard;
