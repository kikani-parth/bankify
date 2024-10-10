import React from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';

const CategoryDetail = ({ category }) => {
  return (
    <View style={styles.categoriesContainer}>
      <View style={styles.categoryNameAndLogoContainer}>
        <View style={styles.logoContainer}>{category.logo}</View>
        <View>
          <Text style={styles.name}>{category.name}</Text>
        </View>
      </View>
      <View>
        <Text>
          <Text style={styles.co2}>{category.co2}</Text> CO2e
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
  },
  categoryNameAndLogoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainer: {
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

    marginRight: 15,
    borderRadius: 30,
    backgroundColor: '#fff',
    padding: 5,
  },
  logo: {
    width: 50,
    height: 50,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  co2: {
    fontWeight: 'bold',
  },
});

export default CategoryDetail;
