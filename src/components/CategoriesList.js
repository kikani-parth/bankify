import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Platform,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const CategoriesList = () => {
  const categories = [
    {
      id: 1,
      name: 'Mobility',
      co2: '150 Kg',
      logo: <MaterialIcons name="airplanemode-on" size={26} color="#0F52BA" />,
    },
    {
      id: 2,
      name: 'Food',
      co2: '100 Kg',
      logo: <MaterialIcons name="fastfood" size={26} color="#D27D2D" />,
    },
    {
      id: 3,
      name: 'Shopping',
      co2: '100 Kg',
      logo: <MaterialIcons name="shopping-cart" size={26} color="#D22B2B" />,
    },
    {
      id: 4,
      name: 'Household',
      co2: '200 Kg',
      logo: <MaterialIcons name="house" size={26} color="#097969" />,
    },
  ];

  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return (
          <View style={styles.categoriesContainer}>
            <View style={styles.categoryNameAndLogoContainer}>
              <View style={styles.logoContainer}>{item.logo}</View>
              <View>
                <Text style={styles.name}>{item.name}</Text>
              </View>
            </View>
            <View>
              <Text>
                <Text style={styles.co2}>{item.co2}</Text> CO2e
              </Text>
            </View>
          </View>
        );
      }}
    />
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

export default CategoriesList;
