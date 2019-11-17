import React from 'react';
import { ToastContainer } from 'react-toastify';
import Dashboard from './pages/Dashboard';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <Dashboard />
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
