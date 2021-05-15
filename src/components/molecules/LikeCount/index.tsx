import React from 'react';
import styled, { keyframes } from 'styled-components';
import { media } from 'src/styles/util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { CSSTransition } from 'react-transition-group';

export type Props = {
  count: number;
  popup?: boolean;
  setPopup?: React.Dispatch<React.SetStateAction<boolean>>;
};

const LikeCount: React.VFC<Props> = ({ count = 0, popup = false, setPopup }) => {
  const nodeRef = React.useRef<any>(null);

  return (
    <LinkCountWrapper data-testid="detail-liked">
      {setPopup ? (
        <>
          <CSSTransition
            nodeRef={nodeRef}
            in={popup}
            timeout={300}
            onEntered={() => {
              setPopup(false);
            }}
          >
            <StyledHeart ref={nodeRef}>
              <FontAwesomeIcon icon={faHeart} style={{ color: 'pink' }} />
            </StyledHeart>
          </CSSTransition>
          <span data-testid="like-count">{count}</span>
        </>
      ) : (
        <>
          <StyledHeart ref={nodeRef}>
            <FontAwesomeIcon icon={faHeart} style={{ color: 'pink' }} />
          </StyledHeart>
          <span data-testid="like-count">{count}</span>
        </>
      )}
    </LinkCountWrapper>
  );
};

export default LikeCount;

const scaleUp = keyframes`
  0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
  }
  90% {
    -webkit-transform: scale(1.2);
            transform: scale(1.2);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
`;

const StyledHeart = styled.div`
  display: inline-block;
  margin-right: 0.5rem;
  &.enter {
    animation: ${scaleUp} 0.3s ease-in-out;
  }
  &.enter-active {
  }
  &.exit {
  }
  &.exit-active {
  }
`;

const LinkCountWrapper = styled.div`
  ${media.phone} {
    font-size: 0.75rem;
  }
`;
