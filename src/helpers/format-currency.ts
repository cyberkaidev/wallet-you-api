import currency from "currency.js";

export function formatCurrency(value: string) {
  return currency(value, { separator: ",", symbol: "" }).format();
}
