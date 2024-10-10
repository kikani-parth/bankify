import React from 'react';
import { StyleSheet, Platform, View, Text, Image } from 'react-native';

const Card = ({ imgSource, heading, content }) => {
  return (
    <View style={styles.container}>
      <Image source={imgSource} style={styles.image} resizeMode="contain" />
      <View style={styles.textContainer}>
        <Text style={styles.heading}>{heading}</Text>
        <Text style={styles.content}>{content}</Text>
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
    marginVertical: 10,
    backgroundColor: '#fff',

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
  content: {
    color: 'gray',
  },
});

export default Card;
