import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-svg-charts';
import { G, Image, Text as SvgText } from 'react-native-svg';
import foodIcon from '../../assets/food.png';
import houseIcon from '../../assets/house.png';
import airplaneIcon from '../../assets/airplane.png';
import shoppingIcon from '../../assets/cart.png';

const CustomPieChart = () => {
  const monthlyEmission = [
    { key: 1, amount: 150, svg: { fill: '#FFCC00' } },
    { key: 2, amount: 195, svg: { fill: '#66BB6A' } },
    { key: 3, amount: 100, svg: { fill: '#42A5F5' } },
    { key: 4, amount: 200, svg: { fill: '#FFA726' } },
  ];

  const imageIcons = [airplaneIcon, foodIcon, shoppingIcon, houseIcon];

  const Labels = ({ slices }) => {
    return slices.map((slice, index) => {
      const { pieCentroid } = slice;
      const iconSize = 15;
      return (
        <G key={index} x={pieCentroid[0]} y={pieCentroid[1]}>
          <Image
            x={-iconSize / 2}
            y={-iconSize / 2}
            width={iconSize}
            height={iconSize}
            preserveAspectRatio="xMidYMid slice"
            opacity="1"
            href={imageIcons[index]}
          />
        </G>
      );
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        <PieChart
          style={{ height: '100%' }}
          valueAccessor={({ item }) => item.amount}
          data={monthlyEmission}
          spacing={0}
          innerRadius={'80%'}
        >
          <Labels />
        </PieChart>

        {/* Centered Text */}
        <View style={styles.centeredTextContainer}>
          <Text style={styles.centeredTextSmall}>THIS MONTH</Text>
          <Text style={styles.centeredTextLarge}>480</Text>
          <Text style={styles.centeredTextSmall}>Kg CO2e</Text>
        </View>
      </View>

      {/* Average CO2 Info */}
      <Text style={styles.averageText}>
        <Text style={styles.co2Value}>Average: 600 Kg</Text>
        {'\n'}CO2e / Month
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    position: 'absolute',
    top: 80,
    alignSelf: 'center',
  },
  chartContainer: {
    // borderWidth: 1,
    height: 200,
    width: 300,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  centeredTextContainer: {
    position: 'absolute',
    alignItems: 'center',
    // borderWidth: 1,
    alignSelf: 'center',
    top: 60,
  },
  centeredTextSmall: {
    color: '#fff',
    fontWeight: 'bold',
  },
  centeredTextLarge: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    margin: 5,
  },
  centeredText: {
    position: 'absolute',
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  averageText: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
  },
  co2Value: {
    fontWeight: 'bold',
  },
});

export default CustomPieChart;
