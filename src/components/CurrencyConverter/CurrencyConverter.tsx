import * as React from "react";
import { CurrencySelector } from "../CurrencySelector/CurrencySelector";
import { AmountInput } from "../AmountInput/AmountInput";
import { StyledTitle, StyledRow, StyledLayout, AnimatedCard } from "./styles";
import { CurrencyCard } from "../CurrencyCard/CurrencyCard";
import { currencyType } from "../../utils/interfaces";

const currencies: { title: currencyType; rate: number }[] = [
  {
    title: "eur",
    rate: 85.1232
  },
  {
    title: "rub",
    rate: 1
  },
  {
    title: "gbp",
    rate: 95.1232
  },
  {
    title: "usd",
    rate: 75.1232
  }
];

export const CurrencyConverter: React.FC = () => (
  <AnimatedCard>
    <StyledTitle>Dolly Leigh</StyledTitle>
    <StyledRow>
      <CurrencySelector />
      <AmountInput />
    </StyledRow>
    <StyledLayout>
      {currencies.map(({ title, rate }) => (
        <CurrencyCard type={title} rate={rate} />
      ))}
    </StyledLayout>
  </AnimatedCard>
);
