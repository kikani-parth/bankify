import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Platform,
} from 'react-native';

// Import logos
import zaraLogo from '../../assets/zara_logo.png';
import fortumLogo from '../../assets/fortum_logo.png';
import kMarketLogo from '../../assets/k-market_logo.png';

const TransactionsList = () => {
  const transactions = [
    {
      name: 'Zara Kamppi',
      amount: '-39.90€',
      co2: '17 Kg',
      date: '26.8.2019',
      logo: zaraLogo,
    },
    {
      name: 'Fortum Energy',
      amount: '-19.90€',
      co2: '66 Kg',
      date: '25.8.2019',
      logo: fortumLogo,
    },
    {
      name: 'K-Citymarket Kamppi',
      amount: '-12.90€',
      co2: '13 Kg',
      date: '25.8.2019',
      logo: kMarketLogo,
    },
  ];

  return (
    <FlatList
      data={transactions}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <View style={styles.transactionContainer}>
          <View style={styles.transactionNameAndLogoContainer}>
            <View style={styles.logoContainer}>
              <Image
                source={item.logo}
                style={styles.logo}
                resizeMode="contain"
              />
            </View>
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.amount}>{item.amount}</Text>
            <Text>
              <Text style={styles.co2}>{item.co2}</Text> CO2e
            </Text>
          </View>
        </View>
      )}
    />
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

export default TransactionsList;
