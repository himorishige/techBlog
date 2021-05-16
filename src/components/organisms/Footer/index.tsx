import React, { memo } from 'react';
import styled from 'styled-components';

const Footer: React.VFC = memo(() => {
  return <StyledFooter>copyright 2021 Hi.Morishige</StyledFooter>;
});

export default Footer;

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  text-align: center;
  background: var(--primary-color);
  color: #fff;
  font-size: 0.75rem;
`;
