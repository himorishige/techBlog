import React from 'react';
import { Link as ReactRouterLink, LinkProps } from 'react-router-dom';
import { Heading } from 'src/components/atoms';
import { DateTime, LikeCount } from 'src/components/molecules';

import { media } from 'src/styles/util';
import styled from 'styled-components';

import { Post } from 'src/types';

export type Props = {
  post: Post;
};

const PostItem: React.VFC<Props> = ({ post }) => {
  return (
    <StyledLink to={`/posts/${post._id}`}>
      <PostListWrapper>
        <PostInfoWrapper>
          <StyledDiv>
            <DateTime
              update={!!post.updatedAt}
              datetime={post.updatedAt ? post.updatedAt : post.createdAt}
            />
            <LikeCount count={post.like} />
          </StyledDiv>
          <StyledHeading size="medium">{post.title}</StyledHeading>
        </PostInfoWrapper>
        <Img src={post.image} alt={post.title} />
      </PostListWrapper>
    </StyledLink>
  );
};

export default PostItem;

const Link: React.VFC<LinkProps> = ({ children, ...props }) => {
  return <ReactRouterLink {...props}>{children}</ReactRouterLink>;
};

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
  transition: opacity 0.2s linear;
  &:hover {
    opacity: 0.8;
  }
`;

const PostListWrapper = styled.div`
  width: 100%;
  min-height: 124px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--primary-color);
  ${media.phone} {
    flex-direction: column-reverse;
  }
`;

const PostInfoWrapper = styled.div`
  width: 100%;
  max-width: calc(100% - 180px);
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${media.phone} {
    max-width: 100%;
    width: 100%;
  }
`;

const StyledHeading = styled(Heading)`
  display: -webkit-box;
  max-width: 100%;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  margin: 0.5rem 0;
  ${media.phone} {
    font-size: 1rem;
  }
`;

const Img = styled.img`
  width: 180px;
  height: 180px;
  object-fit: cover;
  ${media.phone} {
    width: 100%;
    height: 120px;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
