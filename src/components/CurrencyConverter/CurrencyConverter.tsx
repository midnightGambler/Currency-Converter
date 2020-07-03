import * as React from "react";
import { CurrencySelector } from "../CurrencySelector/CurrencySelector";
import { AmountInput } from "../AmountInput/AmountInput";
import { StyledTitle, StyledRow, StyledLayout, AnimatedCard } from "./styles";
import { CurrencyCard } from "../CurrencyCard/CurrencyCard";
import { currenciesType } from "../../utils/interfaces";
import { startSetRates } from "../../store/actions/currenciesActions";
import { useSelector, useDispatch } from "react-redux";
import { defaultStateType } from "../../store/reducers/currenciesReducer";

export const CurrencyConverter: React.FC = () => {
  const [currencies, setCurrencies] = React.useState<currenciesType>([]);

  const dispatch = useDispatch();

  const store = useSelector((state: defaultStateType) => state);

  React.useEffect(() => {
    dispatch(startSetRates());
  }, []);

  React.useEffect(() => {
    setCurrencies(store);
  }, [store]);

  return (
    <AnimatedCard>
      <StyledTitle>Currency converter</StyledTitle>
      <StyledRow>
        <CurrencySelector />
        <AmountInput />
      </StyledRow>
      <StyledLayout>
        {currencies.map(({ title, rate, icon }) => (
          <div className="item">
            <CurrencyCard type={title} rate={parseFloat(rate)} icon={icon} />
          </div>
        ))}
      </StyledLayout>
    </AnimatedCard>
  );
};
