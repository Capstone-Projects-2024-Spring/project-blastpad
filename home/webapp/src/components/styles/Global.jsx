import { createGlobalStyle } from "styled-components";
import * as theme from "./Theme.styled";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#root, .App {
  padding: 0;
  width: 100%;
  height: 100%;
}

body {
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: Inter;
  width: 800px;
  height: 480px;
  padding: 19px;
}

.dark {
  background-color: ${theme.dark.colors.header};
}
`;