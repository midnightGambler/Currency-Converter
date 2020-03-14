import styled, { keyframes, DarkTheme } from "styled-components";

const animatedBoxShadow = (props: {
  theme: { colors: DarkTheme };
}) => keyframes`
  0% {
    box-shadow: none;
    opacity: 0;
    transform: scale(0);
  }
  35% {
    transform: scale(1.1);
  }
  45% {
    transform: scale(0.90);
  }
  50% {
    opacity: 1;
    box-shadow: none;
    transform: scale(1);
  }
  100% {
    box-shadow: ${props.theme.colors.boxShadow};
  }
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};
  padding: 2rem;
  border-radius: 32px;
  animation: ${animatedBoxShadow} 1.5s ease-in-out 0s forwards;
`;
