import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primary: string;
    bgLight: string;
    bg: string;
    bgDark: string;
    boxShadow: string;
  }
}
