import React, { memo } from 'react';
import { AdminLayout } from 'src/components/template';

import { useAppSelector } from 'src/app/hooks';
import { selectPosts } from 'src/features/posts/postsEntitySlice';
import { DateTime } from 'src/components/molecules';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

const Admin: React.VFC = memo(() => {
  const posts = useAppSelector(selectPosts.selectAll);

  return (
    <AdminLayout>
      <StyledTable>
        <thead>
          <StyledThead>
            <StyledTh></StyledTh>
            <StyledTh className="minWidth">ID</StyledTh>
            <StyledTh>タイトル</StyledTh>
            <StyledTh className="minWidth">公開日</StyledTh>
            <StyledTh className="minWidth">更新日</StyledTh>
            <StyledTh className="minWidth">いいね</StyledTh>
          </StyledThead>
        </thead>
        <tbody>
          {posts &&
            posts.map((post) => {
              return (
                <StyledTr key={post._id}>
                  <StyledTd>{post.publish && <FontAwesomeIcon icon={faUpload} />}</StyledTd>
                  <StyledTd>
                    <Center style={{ fontSize: '0.5rem', wordBreak: 'break-all' }}>
                      {post._id}
                    </Center>
                  </StyledTd>
                  <StyledTd>
                    <StyledLink to={`/admin/posts/${post._id}`}>{post.title}</StyledLink>
                  </StyledTd>
                  <StyledTd>
                    <Center>
                      <DateTime datetime={post.createdAt} />
                    </Center>
                  </StyledTd>
                  <StyledTd>
                    <Center>
                      {post.updatedAt && <DateTime update datetime={post.updatedAt} />}
                    </Center>
                  </StyledTd>
                  <StyledTd>
                    <Center>{post.like}</Center>
                  </StyledTd>
                </StyledTr>
              );
            })}
        </tbody>
      </StyledTable>
    </AdminLayout>
  );
});

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

const StyledThead = styled(StyledTr)`
  border-bottom: 1px solid var(--primary-color);
`;

const StyledTh = styled.th`
  font-weight: bold;
  padding: 0.5rem 0;
  vertical-align: middle;
  &.minWidth {
    min-width: 5rem;
  }
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
