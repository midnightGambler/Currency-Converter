import * as React from "react";
import {
  StyledCard,
  StyledSubtitle,
  StyledCloseIcon,
  StyledExchangeIcon,
  StyledSmall
} from "./styles";
import { CurrencyCardProps } from "./interfaces";
import close from "../../svg/close.svg";
import exchange from "../../svg/exchange.svg";

export const CurrencyCard: React.FC<CurrencyCardProps> = ({
  children,
  rate
}) => {
  return (
    <StyledCard>
      <StyledSubtitle>
        {children}
        <StyledCloseIcon
          primary
          glyph={close.id}
          viewBox={close.viewBox}
          width="16px"
          height="16px"
        />
      </StyledSubtitle>
      <StyledSmall>
        <StyledExchangeIcon
          primary
          glyph={exchange.id}
          viewBox={exchange.viewBox}
          width="12px"
          height="12px"
        />
        {rate}
      </StyledSmall>
      <b>1520</b>
    </StyledCard>
  );
};
