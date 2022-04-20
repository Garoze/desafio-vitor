import { createGlobalStyle } from 'styled-components';

import { Colors } from './Colors';

export const GlobalStyles = createGlobalStyle`
  ${Colors};

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body,
  input,
  select,
  button,
  textarea {
    font: 400 1rem "Roboto", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
