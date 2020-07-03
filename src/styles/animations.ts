import { keyframes, DefaultTheme } from "styled-components";

export const animatedBoxShadow = (props: { theme: DefaultTheme }) => keyframes`
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
  box-shadow: ${props.theme.boxShadow};
}
`;

export const animatedShadow = (props: { theme: DefaultTheme }) => keyframes`
0% {
  box-shadow: none;
}
100% {
  box-shadow: ${props.theme.boxShadow};
}
`;
