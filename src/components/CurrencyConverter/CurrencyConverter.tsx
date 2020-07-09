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

  const handleCopy = (ref: React.MutableRefObject<HTMLInputElement>) => {
    ref.current.select();
    document.execCommand("copy");
  };

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
            <CurrencyCard
              handleCopy={handleCopy}
              value={value}
              type={title}
              rate={rate}
              icon={icon}
            />
          </StyledLayoutItem>
        ))}
      </StyledLayout>
    </AnimatedCard>
  );
};
