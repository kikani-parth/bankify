const getColorByAmount = (amount) => {
  console.log(amount);
  if (amount <= 500) {
    return '#66BB6A';
  } else if (amount > 500 && amount <= 1000) {
    return '#FFCC00';
  } else {
    return '#FF0000';
  }
};

export default getColorByAmount;
