import React, { memo } from 'react';
import PostItemList from 'src/components/organisms/PostItemList';
import { DefaultLayout } from 'src/components/template';

import { useAppSelector } from 'src/app/hooks';
import { selectPosts } from 'src/features/posts/postsEntitySlice';

const Home: React.VFC = memo(() => {
  const posts = useAppSelector(selectPosts.selectAll);

  return <DefaultLayout>{posts && <PostItemList posts={posts} />}</DefaultLayout>;
});

export default Home;
