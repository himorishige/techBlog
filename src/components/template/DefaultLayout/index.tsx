import React from 'react';
import { Header, Footer } from 'src/components/organisms';

import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

const DefaultLayout: React.VFC<Props> = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      <DefaultWrapper>{children}</DefaultWrapper>
      <Footer />
    </>
  );
};

export default DefaultLayout;

const DefaultWrapper = styled.main`
  width: 100%;
  min-height: calc(100vh - 96px - 60px);
  max-width: 768px;
  margin: 0 auto;
  padding: 2rem;
`;
