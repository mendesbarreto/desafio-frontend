import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #fff;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font: 14px Helvetica;
  }
  #root {
    min-height: 100vh;
    height: 100%;
    margin: 0 auto;
  }
  button {
    cursor: pointer;
  }
`;
