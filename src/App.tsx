import React from 'react';
import { GlobalStyle } from 'src/styles';
import { Detail } from 'src/components/pages';

const App: React.VFC = () => {
  return (
    <>
      <GlobalStyle />
      <Detail />
    </>
  );
};

export default App;
