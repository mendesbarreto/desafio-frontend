import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: #f7b733;
    background: linear-gradient(0deg, #f7b733 0%, #fc4a1a 100%);
  }

  button {
    cursor: pointer;
  }
`;
