import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { SET_RATES, SET_SELECTED_CURRENCY, SET_VALUE } from "../types";
import { defaultStateType } from "../reducers/currenciesReducer";
import { currencyType } from "../../utils/interfaces";
import { handleErrors } from "../../utils/utils";

const setRates = (rates: any) => ({
  type: SET_RATES,
  rates,
});

export const setValue = (value: string) => ({
  type: SET_VALUE,
  value,
});

export const setSelectedCurrency = (selectedCurrency: currencyType) => ({
  type: SET_SELECTED_CURRENCY,
  selectedCurrency,
});

export const startSetRates = (
  currency: currencyType
): ThunkAction<void, defaultStateType, unknown, Action<string>> => (dispatch) =>
  fetch(`${process.env.API_URL}?base=${currency}&symbols=USD,GBP,RUB,EUR`)
    .then(handleErrors)
    .then(({ rates }) => {
      const data = Object.keys(rates).map((key) => ({
        title: key as currencyType,
        rate: rates[key],
      }));
      return dispatch(setRates(data));
    })
    .catch(() => {
      // TODO: оформить ошибки как-нибудь по-красивше
      alert("An error occured while loading rates. Please try again later.");
    });
