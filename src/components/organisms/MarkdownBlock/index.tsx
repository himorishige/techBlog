import React, { memo } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

import { DateTime } from 'src/components/molecules';
import { Button, Heading } from 'src/components/atoms';
import { LikeCount } from 'src/components/molecules';
import { Margin, media } from 'src/styles/util';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faPencilAlt, faUpload } from '@fortawesome/free-solid-svg-icons';

import { StyledMarkdown, components } from 'src/styles/markdownStyle';
import { Post } from 'src/types';

type Props = {
  clickHandler?: () => Promise<void>;
  editHandler?: () => Promise<void>;
  publishToggleHandler?: () => Promise<void>;
  deleteHandler?: () => Promise<void>;
  disabled: boolean;
  isAdmin?: boolean;
  post: Post;
  popup?: boolean;
  setPopup?: React.Dispatch<React.SetStateAction<boolean>>;
};

const MarkdownBlock: React.VFC<Props> = memo((props) => {
  const {
    clickHandler,
    editHandler,
    publishToggleHandler,
    deleteHandler,
    disabled,
    isAdmin = false,
    post,
    popup,
    setPopup,
  } = props;

  return (
    <>
      <PostHeadWrapper>
        <InfoArea>
          <DateTime
            update={!!post.updatedAt}
            datetime={post.updatedAt ? post.updatedAt : post.createdAt}
          />
          {isAdmin ? (
            <LikeWrapper>
              <Margin right="1rem">
                <LikeCount count={post.like} popup={popup} setPopup={setPopup} />
              </Margin>
              <Margin right="1rem">
                {post.publish ? (
                  <Button
                    data-testid="detail-unpublish-button"
                    onClick={publishToggleHandler}
                    disabled={disabled}
                    bgColor="yellowgreen"
                    mainColor="white"
                    borderColor="yellowgreen"
                  >
                    <FontAwesomeIcon icon={faUpload} /> 公開中
                  </Button>
                ) : (
                  <Button
                    data-testid="detail-publish-button"
                    onClick={publishToggleHandler}
                    disabled={disabled}
                    bgColor="dimgray"
                    mainColor="white"
                    borderColor="dimgray"
                  >
                    <FontAwesomeIcon icon={faUpload} /> 非公開中
                  </Button>
                )}
              </Margin>
              <Margin right="1rem">
                <Button data-testid="detail-editbutton" onClick={editHandler} disabled={disabled}>
                  <FontAwesomeIcon icon={faPencilAlt} /> 編集
                </Button>
              </Margin>
              <Button
                data-testid="detail-deletebutton"
                borderColor="firebrick"
                mainColor="firebrick"
                onClick={deleteHandler}
                disabled={disabled}
              >
                <FontAwesomeIcon icon={faTrashAlt} /> 削除
              </Button>
            </LikeWrapper>
          ) : (
            <LikeWrapper>
              <Margin right="1rem">
                <LikeCount count={post.like} popup={popup} setPopup={setPopup} />
              </Margin>
              <Button data-testid="detail-likebutton" onClick={clickHandler} disabled={disabled}>
                <FontAwesomeIcon icon={faHeart} /> いいね
              </Button>
            </LikeWrapper>
          )}
        </InfoArea>
        <TitleWrapper>
          <Heading size="large" data-testid="detail-title">
            {post.title}
          </Heading>
        </TitleWrapper>
      </PostHeadWrapper>
      <BodyWrapper>
        <StyledMarkdown>
          <ReactMarkdown
            data-testid="detail-body"
            remarkPlugins={[gfm]}
            components={components}
            children={post.body}
            className="markdown-body"
          />
        </StyledMarkdown>
      </BodyWrapper>
    </>
  );
});

export default MarkdownBlock;

const PostHeadWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const LikeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const TitleWrapper = styled.div`
  margin: 1rem 0 0.5rem;
  padding: 1rem 0;
  border-bottom: 1px solid var(--primary-color);
`;

const InfoArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BodyWrapper = styled.div`
  margin-top: 2rem;
  ${media.phone} {
    margin-top: 1rem;
  }
`;
