import React from 'react';
import styled from 'styled-components';

type Heading = JSX.IntrinsicElements['h3'];

const StyledHeading = styled.h3<Heading>`
  font-size: 1.25rem;
`;

const Home: React.VFC = () => {
  return (
    <>
      <h1>Home</h1>
      <StyledHeading as="h2" data-testid="detail-title">
        記事タイトル
      </StyledHeading>
    </>
  );
};

export default Home;
