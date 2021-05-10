import React from 'react';
import { GlobalStyle } from 'src/styles';
import { Home } from 'src/components/pages';

const App: React.VFC = () => {
  return (
    <>
      <GlobalStyle />
      <div>App</div>
      <Home />
    </>
  );
};

export default App;
