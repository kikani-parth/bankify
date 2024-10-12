import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { PieChart } from 'react-native-svg-charts';
import { G, Image, Text as SvgText, Circle } from 'react-native-svg';
import foodIcon from '../../assets/food.png';
import houseIcon from '../../assets/house.png';
import airplaneIcon from '../../assets/airplane.png';
import shoppingIcon from '../../assets/cart.png';

const CustomPieChart = () => {
  const data = [
    { key: 1, amount: 120, svg: { fill: '#FFCC00' } }, // yellow
    { key: 2, amount: 80, svg: { fill: '#66BB6A' } }, // green
    { key: 3, amount: 60, svg: { fill: '#42A5F5' } }, // blue
    { key: 4, amount: 220, svg: { fill: '#FFA726' } }, // orange
  ];

  const imageIcons = [foodIcon, houseIcon, airplaneIcon, shoppingIcon];

  const Labels = ({ slices }) => {
    return slices.map((slice, index) => {
      const { labelCentroid, pieCentroid, data } = slice;
      // Corrected centering of the icon using pieCentroid
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
          data={data}
          spacing={0}
          innerRadius={'80%'}
        >
          <Labels />
        </PieChart>
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
