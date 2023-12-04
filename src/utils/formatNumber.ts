export const formatNumber = (value: number) => {
  let numberString = value.toString();

  let groups = [];
  while (numberString.length > 0) {
    groups.unshift(numberString.slice(-3));
    numberString = numberString.slice(0, -3);
  }

  return groups.join('.');
};
