const calculateTotalCo2e = (emissionData) => {
  return emissionData.reduce(
    (total, currentItem) => total + currentItem.amount,
    0
  );
};

export default calculateTotalCo2e;
