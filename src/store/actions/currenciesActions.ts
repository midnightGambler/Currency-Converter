import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { SET_RATES } from "../types";
import { defaultStateType } from "../reducers/currenciesReducer";
import { currencyType } from "../../utils/interfaces";
import EUR from "../../svg/eur.svg";
import GBP from "../../svg/gbp.svg";
import RUB from "../../svg/rub.svg";
import USD from "../../svg/usd.svg";

// sorry for any
const icons: any = {
  EUR,
  GBP,
  USD,
  RUB
};

const setRates = (rates: any) => ({
  type: SET_RATES,
  rates
});

export const startSetRates = (): ThunkAction<
  void,
  defaultStateType,
  unknown,
  Action<string>
> => dispatch => {
  return fetch(`${process.env.API_URL}?base=USD&symbols=USD,GBP,RUB,EUR`)
    .then(response => response.json())
    .then(({ rates }) => {
      const data = Object.keys(rates).map(key => ({
        title: key as currencyType,
        rate: rates[key].toFixed(4),
        icon: icons[key]
      }));
      console.log(data);
      return dispatch(setRates(data));
    });
};
