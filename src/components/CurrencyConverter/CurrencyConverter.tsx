import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CurrencySelector } from "../CurrencySelector/CurrencySelector";
import { AmountInput } from "../AmountInput/AmountInput";
import {
  StyledTitle,
  StyledRow,
  StyledLayout,
  StyledLayoutItem,
  AnimatedCard,
} from "./styles";
import { CurrencyCard } from "../CurrencyCard/CurrencyCard";
import { startSetRates } from "../../store/actions/currenciesActions";
import { defaultStateType } from "../../store/reducers/currenciesReducer";
import { currencyObjType } from "../../utils/interfaces";

export const CurrencyConverter: React.FC = () => {
  const dispatch = useDispatch();

  const { rates, selectedCurrency, value } = useSelector(
    (state: defaultStateType) => ({
      rates: state.rates,
      selectedCurrency: state.selectedCurrency,
      value: state.value,
    })
  );

  React.useEffect(() => {
    dispatch(startSetRates(selectedCurrency));
  }, [selectedCurrency]);

  const renderCurrencyCards = () =>
    rates.map((rate: currencyObjType) => (
      <StyledLayoutItem key={rate.title}>
        <CurrencyCard value={value} {...rate} />
      </StyledLayoutItem>
    ));

  return (
    <AnimatedCard>
      <StyledTitle>Currency converter</StyledTitle>
      <StyledRow>
        <CurrencySelector />
        <AmountInput />
      </StyledRow>
      <StyledLayout>{renderCurrencyCards()}</StyledLayout>
    </AnimatedCard>
  );
};
