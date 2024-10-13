const getColorByAmount = (amount) => {
  if (amount <= 200) {
    return '#66BB6A';
  } else if (amount > 200 && amount <= 400) {
    return '#FFCC00';
  } else {
    return '#FF0000';
  }
};

export default getColorByAmount;
