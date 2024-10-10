import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CategoryDetail from './CategoryDetail';

const CategoriesList = ({ listData }) => {
  const navigation = useNavigation();

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={listData}
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
