import * as React from "react";
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
import { useSelector, useDispatch } from "react-redux";
import { defaultStateType } from "../../store/reducers/currenciesReducer";

export const CurrencyConverter: React.FC = () => {
  const dispatch = useDispatch();

  const { rates, selectedCurrency } = useSelector(
    (state: defaultStateType) => ({
      rates: state.rates,
      selectedCurrency: state.selectedCurrency,
    })
  );

  React.useEffect(() => {
    dispatch(startSetRates(selectedCurrency));
  }, [selectedCurrency]);

  return (
    <AnimatedCard>
      <StyledTitle>Currency converter</StyledTitle>
      <StyledRow>
        <CurrencySelector />
        <AmountInput />
      </StyledRow>
      <StyledLayout>
        {rates.map(({ title, rate, icon }) => (
          <StyledLayoutItem key={title}>
            <CurrencyCard type={title} rate={rate} icon={icon} />
          </StyledLayoutItem>
        ))}
      </StyledLayout>
    </AnimatedCard>
  );
};
