import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const CategoryOverview = ({ category }) => {
  return (
    <View style={styles.overview}>
      <View style={styles.iconContainer}>
        <MaterialIcons
          name={category.logo.name}
          size={60}
          color={category.logo.color}
          style={styles.icon}
        />
      </View>

      <Text style={styles.name}>{category.name}</Text>
      <View style={styles.co2Container}>
        <Text style={styles.co2}>
          <Text style={styles.co2Value}>{category.co2}</Text> CO2e
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overview: {
    // borderWidth: 1,
    alignItems: 'center',
  },
  iconContainer: {
    borderRadius: 60,
    backgroundColor: '#fff',
    marginBottom: 30,

    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.13,
    shadowRadius: 5,

    // Elevation for Android
    ...Platform.select({
      android: {
        elevation: 8,
      },
    }),
  },
  icon: {
    padding: 30,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  co2Container: {
    marginTop: 15,
    // borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#D3D3D3',
  },
  co2: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  co2Value: {
    fontWeight: '600',
  },
});

export default CategoryOverview;
