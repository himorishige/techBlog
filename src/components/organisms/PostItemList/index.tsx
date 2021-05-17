import React, { memo } from 'react';
import { PostItem } from 'src/components/molecules';
import styled from 'styled-components';

import { Posts } from 'src/types';
import { media } from 'src/styles/util';
import ErrorMessage from 'src/components/molecules/ErrorMessage';

type Props = {
  posts: Posts;
};

const PostItemList: React.VFC<Props> = memo(({ posts }) => {
  const postsData = posts.filter((post) => post.publish === true);

  return (
    <PostItemWrapper>
      {postsData.length ? (
        postsData.map((post) => <PostItem key={post._id} post={post} />)
      ) : (
        <ErrorMessage>記事がありません</ErrorMessage>
      )}
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
