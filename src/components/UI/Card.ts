import styled, { keyframes } from "styled-components";

const animatedBoxShadow = keyframes`
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
    box-shadow: 8px 8px 16px #424244, -8px -8px 16px #5c5a5e;
  }
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.bgLight};
  padding: 2rem;
  border-radius: 32px;
  animation: ${animatedBoxShadow} 1.5s ease-in-out 0s forwards;
  /* box-shadow: 8px 8px 16px #424244, -8px -8px 16px #5c5a5e; */
  /* box-shadow: rgba(26, 26, 27, 0.635) 0px 2px 15px 0px; */
`;
