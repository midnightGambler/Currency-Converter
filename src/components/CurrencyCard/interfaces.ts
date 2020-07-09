import { currencyType } from "../../utils/interfaces";

export interface CurrencyCardProps {
  rate: number;
  type: currencyType;
  icon: any;
  value: string;
  handleCopy: (ref: React.MutableRefObject<HTMLInputElement>) => void;
}
