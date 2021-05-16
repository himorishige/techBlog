import React, { memo } from 'react';
import PostItemList from 'src/components/organisms/PostItemList';
import { DefaultLayout } from 'src/components/template';

import { useAppSelector } from 'src/app/hooks';
import { selectPosts } from 'src/features/posts/postsEntitySlice';
import ErrorMessage from 'src/components/molecules/ErrorMessage';

const Home: React.VFC = memo(() => {
  const posts = useAppSelector(selectPosts.selectAll);

  return (
    <DefaultLayout>
      {posts ? (
        <PostItemList posts={posts} />
      ) : (
        <ErrorMessage>記事が投稿されていません。</ErrorMessage>
      )}
    </DefaultLayout>
  );
});

export default Home;
