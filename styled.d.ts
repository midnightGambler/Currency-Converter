import "styled-components";

declare module "styled-components" {
  export interface DarkTheme {
    primary: string;
    bgLight: string;
    bg: string;
    bgDark: string;
    boxShadow: string;
  }
}
