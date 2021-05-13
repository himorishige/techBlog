import React from 'react';
import PostItemList from 'src/components/organisms/PostItemList';
import { DefaultLayout } from 'src/components/template';

import styled from 'styled-components';

import { useAppSelector, useAppDispatch } from 'src/app/hooks';
import { selectPosts } from 'src/features/posts/postsSlice';

const Home: React.VFC = () => {
  const posts = useAppSelector(selectPosts);

  return <DefaultLayout>{posts && <PostItemList posts={posts} />}</DefaultLayout>;
};

export default Home;
