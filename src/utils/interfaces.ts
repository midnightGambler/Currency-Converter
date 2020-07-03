export type currencyType =
  | "gbp"
  | "eur"
  | "rub"
  | "usd"
  | "GBP"
  | "EUR"
  | "RUB"
  | "USD";

export type currenciesType = { title: currencyType; rate: number; icon: any }[];
