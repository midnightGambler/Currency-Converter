import styled from "styled-components";
import { Icon } from "../UI/Icon/Icon";
import { Card } from "../UI/Card";
import { getCurrencySign } from "../../utils/utils";
import { currencyType } from "../../utils/interfaces";
import { animatedShadow } from "../../styles/animations";

export const StyledExchangeIcon = styled(Icon)`
  margin-right: 0.2rem;
`;
export const StyledCurrencyIcon = styled(Icon)`
  margin-left: auto;
`;

interface StyledCardProps {
  type: currencyType;
}

export const StyledCard = styled(Card)<StyledCardProps>`
  position: relative;
  max-width: 49%;
  padding: 1rem;
  margin-bottom: 1rem;
  animation: ${animatedShadow} 0.5s ease-in-out 2s forwards;
  /* &:before {
    content: '${({ type }) => getCurrencySign(type)}';
    position: absolute;
    font-size: 2rem;
    right: 1rem;
    top: .5rem;
    line-height: 1;
    font-family: Arial;
  } */
`;

export const StyledSmall = styled.small`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  margin-left: auto;
`;

export const StyledReadonlyInput = styled.input`
  border: none;
  text-align: right;
  width: 100%;
  padding: 0.25rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.bgLight};
  &:hover {
    cursor: copy;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2pt ${({ theme }) => theme.primary};
  }

  &::selection {
    background-color: transparent;
  }
`;
