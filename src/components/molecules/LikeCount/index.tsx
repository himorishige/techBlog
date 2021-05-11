import React from 'react';
import styled from 'styled-components';
import { media } from 'src/styles/util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

export type Props = {
  count: number;
};

const LikeCount: React.VFC<Props> = ({ count }) => {
  return (
    <LinkCountWrapper data-testid="detail-liked">
      <FontAwesomeIcon icon={faHeart} style={{ color: 'pink' }} />{' '}
      <span data-testid="like-count">{count}</span>
    </LinkCountWrapper>
  );
};

export default LikeCount;

const LinkCountWrapper = styled.div`
  ${media.phone} {
    font-size: 0.75rem;
  }
`;
