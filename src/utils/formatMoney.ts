export const formatMoney = (value: number, currency: string): string => {
  const formattedValue = value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return `${currency} ${formattedValue}`;
};
