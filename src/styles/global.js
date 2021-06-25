import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  body {
    background-color: ${props => props.theme.colors.background};
  }

  body, input, button textarea {
    font: 400 16px 'Roboto', sans-serif;
  }
`;