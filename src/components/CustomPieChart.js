import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-svg-charts';
import { G, Image, Text as SvgText } from 'react-native-svg';
import calculateTotalCo2e from '../utils/calculateTotalCo2e';
import getColorByAmount from '../utils/getColorByAmount';
import { monthlyEmission, iconMap } from '../../_mockData';

const CustomPieChart = () => {
  // Map through the monthlyEmission array and add color based on amount
  const updatedMonthlyEmission = monthlyEmission.map((item) => ({
    ...item,
    svg: { fill: getColorByAmount(item.amount) },
  }));

  // Map the imageIcons based on the 'name' in monthlyEmission
  const imageIcons = monthlyEmission.map((item) => iconMap[item.name]);

  const totalAmount = calculateTotalCo2e(updatedMonthlyEmission);

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
          data={updatedMonthlyEmission}
          spacing={0}
          innerRadius={'80%'}
        >
          <Labels />
        </PieChart>

        {/* Centered Text */}
        <View style={styles.centeredTextContainer}>
          <Text style={styles.centeredTextSmall}>THIS MONTH</Text>
          <Text style={styles.centeredTextLarge}>{totalAmount}</Text>
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
