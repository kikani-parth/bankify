import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import Card from './Card';
import { tips } from '../../_mockData';

const Tips = () => {
  return (
    <View>
      <Text style={styles.heading}>Tips</Text>
      <FlatList
        data={tips}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <Card
              imgSource={item.img}
              heading={item.heading}
              content={item.content}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: '#B2BEB5',
    fontWeight: 'bold',
    fontSize: 17,
    marginLeft: 20,
    marginTop: 30,
    marginBottom: 15,
  },
});

export default Tips;
