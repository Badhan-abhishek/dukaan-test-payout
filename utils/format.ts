export const FormatPrice = (value: number) => {
  return value.toLocaleString("en-IN", {
    currency: "INR",
    notation: "standard",
    currencyDisplay: "symbol",
    style: "currency",
  });
};
