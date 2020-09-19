import { currencyType } from "./interfaces";

import EUR from "../svg/eur.svg";
import GBP from "../svg/gbp.svg";
import RUB from "../svg/rub.svg";
import USD from "../svg/usd.svg";

export const getCurrencySign: (type: currencyType) => string = (type) => {
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

// sorry for any
export const icons: any = {
  EUR,
  GBP,
  USD,
  RUB,
};

export const handleErrors = (response: Response) => {
  if (!response.ok) throw Error(response.statusText);
  return response.json();
};

export const handleCopy = (ref: React.MutableRefObject<HTMLInputElement>) => {
  ref.current.select();
  document.execCommand("copy");
};
