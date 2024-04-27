import { createGlobalStyle } from "styled-components";
import * as theme from "./Theme.styled";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
}

#root, .App {
  padding: 0;
  width: 100%;
  height: 100%;
}

body {
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: Arial;
  width: 800px;
  height: 480px;
  padding: 19px;
}
`;