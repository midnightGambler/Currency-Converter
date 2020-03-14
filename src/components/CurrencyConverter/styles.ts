import styled, { keyframes, DefaultTheme } from "styled-components";
import { Title } from "../UI/Title";
import { Card } from "../UI/Card";
import { Icon } from "../UI/Icon/Icon";

const animatedShadow = (props: { theme: DefaultTheme }) => keyframes`
  0% {
    box-shadow: none;
  }
  100% {
    box-shadow: ${props.theme.boxShadow};
  }
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 1rem;
`;

export const StyledRow = styled.div`
  display: flex;
  border-radius: 2rem;
  animation: ${animatedShadow} 0.5s ease-in-out 1.5s forwards;
  margin-bottom: 2rem;
`;

export const StyledLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 2rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

export const StyledCard = styled(Card)`
  flex: 0 0 49%;
  padding: 1rem;
`;

export const StyledIcon = styled(Icon)`
  margin-right: 0.5rem;
`;
