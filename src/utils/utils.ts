import { currencyType } from "./interfaces";

export const getCurrencySign: (type: currencyType) => string = type => {
  switch (type.toLowerCase()) {
    case "gbp":
      return "£";
    case "eur":
      return "€";
    case "rub":
      return "₽";
    case "usd":
      return "$";
    default:
      return "$";
  }
};
