import React, { useEffect } from 'react';
import { Header, Footer } from 'src/components/organisms';
import { media } from 'src/styles/util';

import styled from 'styled-components';

import { useAppSelector, useAppDispatch } from 'src/app/hooks';
import {
  fetchEntityPosts,
  selectPosts,
  selectMessage,
  selectStatus,
} from 'src/features/posts/postsEntitySlice';
import { useToast } from 'src/hooks/useToast';
import { Spinner } from 'src/components/molecules';
import ErrorMessage from 'src/components/molecules/ErrorMessage';

type Props = {
  children: React.ReactNode;
};

const DefaultLayout: React.VFC<Props> = (props) => {
  const { children } = props;
  const posts = useAppSelector(selectPosts.selectAll);
  const status = useAppSelector(selectStatus);
  const errorMessage = useAppSelector(selectMessage);
  const dispatch = useAppDispatch();
  const { showToast } = useToast();

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
  }, []);

  return (
    <>
      <Header />
      <DefaultWrapper>
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
};

export default DefaultLayout;

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
