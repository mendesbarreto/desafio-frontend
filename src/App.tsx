import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Weather from './pages/Weather';
import Authorization from './pages/Authorization';
import NotFound from './pages/NotFound';

import './App.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/autorization" component={Authorization} />
        <Route path='/' component={Weather} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}


export default App;
