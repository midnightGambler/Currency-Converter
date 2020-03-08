import { createGlobalStyle } from "styled-components";
import { colors } from "./variables";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1rem;

}
html {
  font-size: 20px;
}
body {
  background-color: ${colors.bg};
}
`;