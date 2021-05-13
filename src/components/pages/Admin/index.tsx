import React from 'react';
import { AdminLayout } from 'src/components/template';

import { useAppSelector, useAppDispatch } from 'src/app/hooks';
import { selectPosts } from 'src/features/posts/postsSlice';
import { DateTime } from 'src/components/molecules';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Admin: React.VFC = () => {
  const posts = useAppSelector(selectPosts);

  return (
    <AdminLayout>
      <h1>Admin</h1>
      <StyledTable>
        <StyledTr1st>
          <StyledTh></StyledTh>
          <StyledTh>ID</StyledTh>
          <StyledTh>タイトル</StyledTh>
          <StyledTh>公開日</StyledTh>
          <StyledTh>更新日</StyledTh>
          <StyledTh>いいね</StyledTh>
        </StyledTr1st>
        {posts &&
          posts.map((post) => {
            return (
              <StyledTr key={post.id}>
                <StyledTd>
                  <input type="checkbox" />
                </StyledTd>
                <StyledTd>
                  <Center>{post.id}</Center>
                </StyledTd>
                <StyledTd>
                  <StyledLink to={`/admin/${post.id}`}>{post.title}</StyledLink>
                </StyledTd>
                <StyledTd>
                  <Center>
                    <DateTime datetime={post.createdAt} />
                  </Center>
                </StyledTd>
                <StyledTd>
                  <Center>
                    <DateTime datetime={post.updatedAt} />
                  </Center>
                </StyledTd>
                <StyledTd>
                  <Center>{post.like}</Center>
                </StyledTd>
              </StyledTr>
            );
          })}
      </StyledTable>
    </AdminLayout>
  );
};

export default Admin;

const StyledTable = styled.table`
  width: 100%;
`;

const StyledTr = styled.tr`
  line-height: 1.5;
  &:nth-child(odd) {
    background: #f8f8f8;
  }
  &:first-child {
    background: #fff;
  }
`;

const StyledTr1st = styled(StyledTr)`
  border-bottom: 1px solid var(--primary-color);
`;

const StyledTh = styled.th`
  font-weight: bold;
  padding: 0.5rem 0;
  vertical-align: middle;
`;

const StyledTd = styled.td`
  padding: 1rem 0.5rem;
  vertical-align: middle;
`;

const Center = styled.div`
  width: 100%;
  text-align: center;
`;

const StyledLink = styled(Link)`
  color: #333;
  &:hover {
    color: #999;
  }
`;
