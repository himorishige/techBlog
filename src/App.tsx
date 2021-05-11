import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from 'src/styles';
import { Router } from 'src/components/router';

const App: React.VFC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Router />
    </BrowserRouter>
  );
};

export default App;
