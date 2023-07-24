import "styled-components";
import "@tanstack/router";
import { darkTheme, lightTheme } from "./constants";

type Theme = typeof lightTheme & typeof darkTheme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
