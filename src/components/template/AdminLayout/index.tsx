import React, { useEffect } from 'react';
import { AdminHeader, Footer } from 'src/components/organisms';
import { media } from 'src/styles/util';

import styled from 'styled-components';

import { useAppSelector, useAppDispatch } from 'src/app/hooks';
import {
  fetchPosts,
  selectPosts,
  selectMessage,
  selectStatus,
} from 'src/features/posts/postsSlice';

type Props = {
  children: React.ReactNode;
};

const AdminLayout: React.VFC<Props> = (props) => {
  const { children } = props;
  const posts = useAppSelector(selectPosts);
  const status = useAppSelector(selectStatus);
  const errorMessage = useAppSelector(selectMessage);
  const dispatch = useAppDispatch();

  const newPostHandler = async () => {
    console.log('new');
  };

  useEffect(() => {
    if (!posts.length) {
      dispatch(fetchPosts());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AdminHeader newPostHandler={newPostHandler} disabled={status === 'loading'} />
      <DefaultWrapper>
        {errorMessage ? (
          <div>{errorMessage}</div>
        ) : status === 'loading' ? (
          <div>loading...</div>
        ) : (
          children
        )}
      </DefaultWrapper>
      <Footer />
    </>
  );
};

export default AdminLayout;

const DefaultWrapper = styled.main`
  width: 100%;
  min-height: calc(100vh - 96px - 60px);
  max-width: 768px;
  margin: 0 auto;
  padding: 2rem;
  ${media.phone} {
    min-height: calc(100vh - 72px - 60px);
    padding: 1rem;
  }
`;
