import * as React from "react";
import {
  StyledCard,
  StyledExchangeIcon,
  StyledSmall,
  StyledReadonlyInput,
  StyledCurrencyIcon,
} from "./styles";
import { CurrencyCardProps } from "./interfaces";
import exchange from "../../svg/exchange.svg";

export const CurrencyCard: React.FC<CurrencyCardProps> = ({
  rate,
  type,
  icon,
  value,
  handleCopy,
}) => {
  const inputRef = React.useRef(null);

  return (
    <StyledCard type={type}>
      <StyledSmall>
        <StyledExchangeIcon
          primary
          glyph={exchange.id}
          viewBox={exchange.viewBox}
          width="12px"
          height="12px"
        />
        {rate.toFixed(4)}
        <StyledCurrencyIcon
          primary
          glyph={icon.id}
          viewBox={icon.viewBox}
          width="32px"
          height="32px"
        />
      </StyledSmall>

      <StyledReadonlyInput
        onFocus={handleCopy.bind(null, inputRef)}
        ref={inputRef}
        readOnly
        value={(rate * Number(value)).toFixed(2)}
        tabIndex={-1}
      />
    </StyledCard>
  );
};
