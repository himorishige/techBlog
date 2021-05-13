import React from 'react';
import { Link as ReactRouterLink, LinkProps } from 'react-router-dom';
import { ReactComponent as HiIcon } from 'src/assets/hiIcon.svg';
import styled from 'styled-components';
import { media } from 'src/styles/util';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { Button } from 'src/components/atoms';

type Props = {
  newPostHandler: () => Promise<void>;
  disabled?: boolean;
};

const AdminHeader: React.VFC<Props> = ({ newPostHandler, disabled = false }) => {
  return (
    <StyledHeader>
      <StyledHeaderInner>
        <StyledHeading>
          <StyledLink to="/admin">
            <StyledHiIcon />
            Tech Blog Dashboard
          </StyledLink>
        </StyledHeading>
        <div>
          <Button
            onClick={newPostHandler}
            borderColor="white"
            bgColor="var(--primary-color)"
            mainColor="white"
            disabled={disabled}
          >
            <FontAwesomeIcon icon={faEdit} /> 新規作成
          </Button>
        </div>
      </StyledHeaderInner>
    </StyledHeader>
  );
};

export default AdminHeader;

const StyledHeader = styled.header`
  width: 100%;
  background: var(--primary-color);
  color: #fff;
`;

const StyledHeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  padding: 1rem 2rem;
  ${media.phone} {
    padding: 0.75rem 1rem;
  }
`;

const StyledHeading = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  ${media.phone} {
    font-size: 1.5rem;
  }
`;

const Link: React.VFC<LinkProps> = ({ children, ...props }) => {
  return <ReactRouterLink {...props}>{children}</ReactRouterLink>;
};

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  transition: opacity 0.3s linear;
  display: flex;
  align-items: center;
  &:hover {
    opacity: 0.8;
  }
`;

const StyledHiIcon = styled(HiIcon)`
  width: 2rem;
  height: 2rem;
  line-height: 2;
  border: 1px solid white;
  margin-right: 1rem;
`;
