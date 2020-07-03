import { SET_RATES, SET_SELECTED_CURRENCY } from "../types";

import EUR from "../../svg/eur.svg";
import GBP from "../../svg/gbp.svg";
import RUB from "../../svg/rub.svg";
import USD from "../../svg/usd.svg";
import { currencyType } from "../../utils/interfaces";

export type defaultStateType = {
  selectedCurrency: currencyType;
  rates: {
    title: currencyType;
    rate: number;
    icon: any;
  }[];
};

const defaultState: defaultStateType = {
  selectedCurrency: "USD",
  rates: [
    {
      title: "USD",
      rate: 0,
      icon: USD,
    },
    {
      title: "EUR",
      rate: 0,
      icon: EUR,
    },
    {
      title: "GBP",
      rate: 0,
      icon: GBP,
    },
    {
      title: "RUB",
      rate: 0,
      icon: RUB,
    },
  ],
};

export const currenciesReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case SET_RATES:
      return { ...state, rates: action.rates };
    case SET_SELECTED_CURRENCY:
      return { ...state, selectedCurrency: action.selectedCurrency };
    default:
      return state;
  }
};
