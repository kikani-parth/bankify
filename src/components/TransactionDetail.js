import React from 'react';
import { StyleSheet, View, Image, Text, Platform } from 'react-native';

const TransactionDetail = ({ transaction }) => {
  return (
    <View style={styles.transactionContainer}>
      <View style={styles.transactionNameAndLogoContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={transaction.logo}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <View>
          <Text style={styles.name}>{transaction.name}</Text>
          <Text style={styles.date}>{transaction.date}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.amount}>{transaction.amount}</Text>
        <Text>
          <Text style={styles.co2}>{transaction.co2}</Text> CO2e
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  transactionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  transactionNameAndLogoContainer: {
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

    // borderWidth: 1,
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
    fontSize: 15,
  },
  date: {
    color: 'gray',
  },
  amount: {
    alignSelf: 'flex-end',
    color: 'gray',
  },
  co2: {
    fontWeight: 'bold',
  },
});

export default TransactionDetail;
