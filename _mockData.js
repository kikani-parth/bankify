// Import logos/images
import zaraLogo from './assets/zara_logo.png';
import fortumLogo from './assets/fortum_logo.png';
import kMarketLogo from './assets/k-market_logo.png';
import hslLogo from './assets/hsl_logo.png';
import burgerKingLogo from './assets/burger_king_logo.png';
import hesburgerLogo from './assets/hesburger_logo.png';
import dominosLogo from './assets/dominos_logo.png';
import bikeImage from './assets/bike.png';
import walkingImage from './assets/walking.png';
import foodIcon from './assets/food.png';
import houseIcon from './assets/house.png';
import airplaneIcon from './assets/airplane.png';
import shoppingIcon from './assets/cart.png';

export const transactions = [
  {
    name: 'Zara Kamppi',
    amount: '-39.90€',
    co2: '17 Kg',
    date: '09.10.2024',
    logo: zaraLogo,
    id: '1',
  },
  {
    name: 'Fortum Energy',
    amount: '-19.90€',
    co2: '66 Kg',
    date: '08.10.2024',
    logo: fortumLogo,
    id: '2',
  },
  {
    name: 'K-Citymarket Kamppi',
    amount: '-12.90€',
    co2: '13 Kg',
    date: '07.10.2024',
    logo: kMarketLogo,
    id: '3',
  },
  {
    name: 'Zara Kamppi',
    amount: '-20.90€',
    co2: '16 Kg',
    date: '07.10.2024',
    logo: zaraLogo,
    id: '4',
  },
  {
    name: 'K-Citymarket Kamppi',
    amount: '-10.00€',
    co2: '12 Kg',
    date: '06.10.2024',
    logo: kMarketLogo,
    id: '5',
  },
];
const mobilityTranscations = [
  {
    name: 'HSL Transportation',
    amount: '-55.00€',
    co2: '150 Kg',
    date: '09.10.2024',
    logo: hslLogo,
    id: '1',
  },
];

const foodTransactions = [
  {
    name: 'Hesburger',
    amount: '-30.00€',
    co2: '55 Kg',
    date: '08.10.2024',
    logo: hesburgerLogo,
    id: '1',
  },
  {
    name: 'Burger King',
    amount: '-23.99€',
    co2: '70 Kg',
    date: '09.10.2024',
    logo: burgerKingLogo,
    id: '2',
  },
  {
    name: "Domino's Pizza",
    amount: '-40.00€',
    co2: '85 Kg',
    date: '10.10.2024',
    logo: dominosLogo,
    id: '3',
  },
];

export const categories = [
  {
    id: '1',
    name: 'Mobility',
    co2: '150 Kg',
    logo: {
      name: 'airplanemode-on',
      size: 26,
      color: '#0F52BA',
    },
    transactions: mobilityTranscations,
  },
  {
    id: '2',
    name: 'Food',
    co2: '210 Kg',
    logo: {
      name: 'fastfood',
      size: 26,
      color: '#D27D2D',
    },
    transactions: foodTransactions,
  },
  {
    id: '3',
    name: 'Shopping',
    co2: '160 Kg',
    logo: {
      name: 'shopping-cart',
      size: 26,
      color: '#D22B2B',
    },
  },
  {
    id: '4',
    name: 'Household',
    co2: '170 Kg',
    logo: {
      name: 'house',
      size: 26,
      color: '#097969',
    },
  },
];

export const tips = [
  {
    id: '1',
    img: bikeImage,
    heading: "Don't drive, bike 10 days in a month",
    content: 'Your carbon footprint will decrease by 144 kg',
  },
  {
    id: '2',
    img: walkingImage,
    heading: 'Get fit and impact',
    content:
      'By walking 2km per week your carbon footprint will decrease by 1kg per week',
  },
];

export const monthlyEmission = [
  { key: 1, amount: 150, name: 'mobility' },
  { key: 2, amount: 210, name: 'food' },
  { key: 3, amount: 160, name: 'shopping' },
  { key: 4, amount: 170, name: 'household' },
];

export const iconMap = {
  mobility: airplaneIcon,
  food: foodIcon,
  shopping: shoppingIcon,
  household: houseIcon,
};
