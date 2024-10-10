import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CategoryDetail from './CategoryDetail';

const CategoriesList = () => {
  const navigation = useNavigation();

  const categories = [
    {
      id: '1',
      name: 'Mobility',
      co2: '150 Kg',
      logo: {
        name: 'airplanemode-on',
        size: 26,
        color: '#0F52BA',
      },
    },
    {
      id: '2',
      name: 'Food',
      co2: '100 Kg',
      logo: {
        name: 'fastfood',
        size: 26,
        color: '#D27D2D',
      },
    },
    {
      id: '3',
      name: 'Shopping',
      co2: '100 Kg',
      logo: {
        name: 'shopping-cart',
        size: 26,
        color: '#D22B2B',
      },
    },
    {
      id: '4',
      name: 'Household',
      co2: '200 Kg',
      logo: {
        name: 'house',
        size: 26,
        color: '#097969',
      },
    },
  ];

  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('CategoryScreen', { category: item })
            }
          >
            <CategoryDetail category={item} />
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default CategoriesList;
