import 'styled-components';

interface IFont {
  title: string;
  main: string;
}
interface IColors {
  primary1: string;
  background1: string;
  accent1: string;
  button: string;
  background2: string;
}

interface IBreakpoints {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  md_min: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    // Temp fonts
    fonts: IFont;
    // Colors for layout
    colors: IColors;
    // Breakpoints for responsive design
    breakpoints: IBreakpoints;
  }
}
