import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ToggleButtons = ({ activeTab, onPressTab }) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={() => onPressTab('categories')}
        style={[
          styles.tabButton,
          activeTab === 'categories' && styles.activeTab,
        ]}
      >
        <Text
          style={[
            styles.tabText,
            activeTab === 'categories' && styles.activeTabText,
          ]}
        >
          Categories
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onPressTab('transactions')}
        style={[
          styles.tabButton,
          activeTab === 'transactions' && styles.activeTab,
        ]}
      >
        <Text
          style={[
            styles.tabText,
            activeTab === 'transactions' && styles.activeTabText,
          ]}
        >
          Transactions
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  tabButton: {
    paddingVertical: 10,
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: 'black',
  },
  activeTabText: {
    color: 'black',
  },
});

export default ToggleButtons;
