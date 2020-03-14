import styled, { keyframes, DarkTheme } from "styled-components";
import { Title } from "../UI/Title";

const animatedShadow = (props: { theme: { colors: DarkTheme } }) => keyframes`
  0% {
    box-shadow: none;
  }
  100% {
    box-shadow: ${props.theme.colors.boxShadow};
  }
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 1rem;
`;

export const StyledRow = styled.div`
  display: flex;
  border-radius: 2rem;
  animation: ${animatedShadow} 0.5s ease-in-out 1.5s forwards;
`;
