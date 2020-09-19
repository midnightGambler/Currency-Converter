import { currencyType } from "../../utils/interfaces";

export interface CurrencyCardProps {
  rate: number;
  title: currencyType;
  icon?: any;
  value: string;
}
