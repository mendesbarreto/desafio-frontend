import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { GlobalStyles } from './styles/global';
import Main from './pages/Main';

function App() {
  return (
    <>
      <GlobalStyles />
      <Main />
      <ToastContainer autoClose={4000} />
    </>
  );
}

export default App;
