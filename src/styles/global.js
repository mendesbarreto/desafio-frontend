import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    font-family: Helvetica, sans-serif;
    font-size: 16px;
    width: 100%;
    height: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased;
    background: linear-gradient(#F98106, #FEBE00);
    color: #333;
  }
  h1,h2,h3,h4,h5,h6 {
    color: #fff;
  }
  img {
    max-width: 100%;
  }
  
  
  
  
  
`;
