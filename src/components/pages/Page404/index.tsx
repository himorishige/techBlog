import React, { memo } from 'react';
import { DefaultLayout } from 'src/components/template';
import styled from 'styled-components';

const Page404: React.VFC = memo(() => {
  return (
    <DefaultLayout>
      <StyledDiv>
        <div>404 Not Found</div>
      </StyledDiv>
    </DefaultLayout>
  );
});

export default Page404;

const StyledDiv = styled.div`
  display: flex;
  height: 100%;
  min-height: calc(100vh - 96px - 60px - 4rem);
  width: 100%;
  align-items: center;
  justify-content: center;
  div {
    font-size: 2rem;
    font-weight: bold;
  }
`;
