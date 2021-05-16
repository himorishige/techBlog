import React, { memo } from 'react';
import { PostItem } from 'src/components/molecules';
import styled from 'styled-components';

import { Posts } from 'src/types';
import { media } from 'src/styles/util';

type Props = {
  posts: Posts;
};

const PostItemList: React.VFC<Props> = memo(({ posts }) => {
  return (
    <PostItemWrapper>
      {posts
        .filter((post) => post.publish === true)
        .map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
    </PostItemWrapper>
  );
});

export default PostItemList;

const PostItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 2rem;
  ${media.phone} {
    grid-gap: 1rem;
  }
`;
