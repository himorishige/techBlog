import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from 'src/styles';
import { Router } from 'src/components/router';
import { ToastProvider } from 'src/hooks/useToast';

const App: React.VFC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ToastProvider>
        <Router />
      </ToastProvider>
    </BrowserRouter>
  );
};

export default App;
