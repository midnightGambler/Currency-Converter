import * as React from "react";
import { Card } from "../UI/Card";
import { CurrencySelector } from "../CurrencySelector/CurrencySelector";
import { AmountInput } from "../AmountInput/AmountInput";
import { StyledTitle, StyledRow, StyledLayout, StyledIcon } from "./styles";
import { CurrencyCard } from "../CurrencyCard/CurrencyCard";
import eur from "../../svg/eur.svg";
import rub from "../../svg/rub.svg";
import gbp from "../../svg/gbp.svg";
import usd from "../../svg/usd.svg";

const icons: any = {
  eur,
  rub,
  gbp,
  usd
};

const currencies = [
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
  <Card>
    <StyledTitle>Dolly Leigh</StyledTitle>
    <StyledRow>
      <CurrencySelector />
      <AmountInput />
    </StyledRow>
    <StyledLayout>
      {currencies.map(({ title, rate }) => (
        <CurrencyCard rate={rate}>
          <StyledIcon
            primary
            glyph={icons[title].id}
            viewBox={icons[title].viewBox}
            width="24px"
            height="24px"
          />
          {title.toUpperCase()}
        </CurrencyCard>
      ))}
    </StyledLayout>
  </Card>
);
