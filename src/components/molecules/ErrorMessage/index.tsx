import React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

const ErrorMessage: React.VFC<Props> = React.memo((props) => {
  return (
    <StyledDiv>
      <p>{props.children}</p>
    </StyledDiv>
  );
});

export default ErrorMessage;

const StyledDiv = styled.div`
  display: flex;
  height: 100%;
  min-height: calc(100vh - 96px - 60px - 4rem);
  width: 100%;
  align-items: center;
  justify-content: center;
  p {
    font-size: 1.5rem;
  }
`;
