import React from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

const Spinner: React.VFC = React.memo(() => {
  return (
    <StyledDiv>
      <Loader type="TailSpin" color="#1a2947" height={100} width={100} timeout={5000} />
    </StyledDiv>
  );
});

export default Spinner;

const StyledDiv = styled.div`
  display: flex;
  height: 100%;
  min-height: calc(100vh - 96px - 60px - 4rem);
  width: 100%;
  align-items: center;
  justify-content: center;
`;
