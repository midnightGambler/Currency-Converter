import * as React from "react";
import { CurrencySelector } from "../CurrencySelector/CurrencySelector";
import { AmountInput } from "../AmountInput/AmountInput";
import { StyledTitle, StyledRow, StyledLayout, AnimatedCard } from "./styles";
import { CurrencyCard } from "../CurrencyCard/CurrencyCard";
import { currencyType } from "../../utils/interfaces";
import eur from "../../svg/eur.svg";
import gbp from "../../svg/gbp.svg";
import rub from "../../svg/rub.svg";
import usd from "../../svg/usd.svg";

const currencies: { title: currencyType; rate: number; icon: any }[] = [
  {
    title: "eur",
    rate: 85.1232,
    icon: eur
  },
  {
    title: "rub",
    rate: 1,
    icon: rub
  },
  {
    title: "gbp",
    rate: 95.1232,
    icon: gbp
  },
  {
    title: "usd",
    rate: 75.1232,
    icon: usd
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
      {currencies.map(({ title, rate, icon }) => (
        <CurrencyCard type={title} rate={rate} icon={icon} />
      ))}
    </StyledLayout>
  </AnimatedCard>
);
