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
import { handleCopy, icons } from "../../utils/utils";

export const CurrencyCard: React.FC<CurrencyCardProps> = ({
  rate,
  title,
  value,
}) => {
  const inputRef = React.useRef(null);

  return (
    <StyledCard type={title}>
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
          glyph={icons[title].id}
          viewBox={icons[title].viewBox}
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
