import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import CategoryDetail from './CategoryDetail';

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
      renderItem={({ item }) => <CategoryDetail category={item} />}
    />
  );
};

const styles = StyleSheet.create({});

export default CategoriesList;
