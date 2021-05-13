import React from 'react';
import { PostItem } from 'src/components/molecules';
import styled from 'styled-components';

import data from 'src/data/sampleData.json';

import { Posts } from 'src/types';
import { media } from 'src/styles/util';

type Props = {
  posts: Posts;
};

const PostItemList: React.VFC<Props> = ({ posts }) => {
  return (
    <PostItemWrapper>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </PostItemWrapper>
  );
};

export default PostItemList;

const PostItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 2rem;
  ${media.phone} {
    grid-gap: 1rem;
  }
`;
