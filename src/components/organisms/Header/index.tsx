import React from 'react';
import { Link as ReactRouterLink, LinkProps } from 'react-router-dom';
import styled from 'styled-components';
import { media } from 'src/styles/util';

const Header: React.VFC = () => {
  return (
    <StyledHeader>
      <StyledHeaderInner>
        <StyledHeading>
          <StyledLink to="/">Tech Blog</StyledLink>
        </StyledHeading>
      </StyledHeaderInner>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  width: 100%;
  background: var(--primary-color);
  color: #fff;
`;

const StyledHeaderInner = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  padding: 1rem 2rem;
  ${media.phone} {
    padding: 0.75rem 2rem;
  }
`;

const StyledHeading = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  ${media.phone} {
    font-size: 1.5rem;
  }
`;

const Link: React.FC<LinkProps> = ({ children, ...props }) => {
  return <ReactRouterLink {...props}>{children}</ReactRouterLink>;
};

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  transition: opacity 0.3s linear;
  &:hover {
    opacity: 0.8;
  }
`;
