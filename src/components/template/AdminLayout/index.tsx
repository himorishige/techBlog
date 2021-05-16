import React, { useEffect, memo } from 'react';
import { AdminHeader, Footer } from 'src/components/organisms';
import { media } from 'src/styles/util';

import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from 'src/app/hooks';
import {
  selectPosts,
  selectMessage,
  selectStatus,
  fetchEntityPosts,
} from 'src/features/posts/postsEntitySlice';

import { useToast } from 'src/hooks/useToast';
import { Spinner } from 'src/components/molecules';
import ErrorMessage from 'src/components/molecules/ErrorMessage';

type Props = {
  children: React.ReactNode;
  layout?: 'wide' | 'narrow';
};

const AdminLayout: React.VFC<Props> = memo((props) => {
  const { children, layout = 'narrow' } = props;
  const posts = useAppSelector(selectPosts.selectAll);
  const status = useAppSelector(selectStatus);
  const errorMessage = useAppSelector(selectMessage);
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { showToast } = useToast();

  const newPostHandler = () => {
    history.push('/admin/posts/new');
  };

  useEffect(() => {
    if (!posts.length) {
      (async () => {
        const resultAction = await dispatch(fetchEntityPosts());
        console.log('fetch');
        if (fetchEntityPosts.rejected.match(resultAction)) {
          showToast('FAIL', 'データの取得に失敗しました。');
        }
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, posts.length]);

  return (
    <>
      <AdminHeader
        layout={layout}
        newPostHandler={newPostHandler}
        disabled={status === 'loading'}
      />
      <DefaultWrapper layout={layout}>
        {errorMessage ? (
          <ErrorMessage>{errorMessage}</ErrorMessage>
        ) : status === 'loading' ? (
          <Spinner />
        ) : (
          children
        )}
      </DefaultWrapper>
      <Footer />
    </>
  );
});

export default AdminLayout;

const DefaultWrapper = styled.main<{ layout: 'wide' | 'narrow' }>`
  width: 100%;
  min-height: calc(100vh - 96px - 60px);
  max-width: ${(props) => (props.layout === 'wide' ? '100%' : '768px')};
  margin: 0 auto;
  padding: 2rem;
  ${media.phone} {
    min-height: calc(100vh - 72px - 60px);
    padding: 1rem;
  }
`;
