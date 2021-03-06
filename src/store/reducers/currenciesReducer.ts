import { SET_RATES, SET_SELECTED_CURRENCY, SET_VALUE } from "../types";

import EUR from "../../svg/eur.svg";
import GBP from "../../svg/gbp.svg";
import RUB from "../../svg/rub.svg";
import USD from "../../svg/usd.svg";

import { currencyType } from "../../utils/interfaces";

export type defaultStateType = {
  value: string;
  selectedCurrency: currencyType;
  rates: {
    title: currencyType;
    rate: number;
  }[];
};

const defaultState: defaultStateType = {
  value: "",
  selectedCurrency: "USD",
  rates: [
    {
      title: "USD",
      rate: 0,
    },
    {
      title: "EUR",
      rate: 0,
    },
    {
      title: "GBP",
      rate: 0,
    },
    {
      title: "RUB",
      rate: 0,
    },
  ],
};

export const currenciesReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case SET_RATES:
      return { ...state, rates: action.rates };
    case SET_SELECTED_CURRENCY:
      return { ...state, selectedCurrency: action.selectedCurrency };
    case SET_VALUE:
      return { ...state, value: action.value };
    default:
      return state;
  }
};
