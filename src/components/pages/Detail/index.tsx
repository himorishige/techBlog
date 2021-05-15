import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { DefaultLayout } from 'src/components/template';

import { useAppSelector, useAppDispatch } from 'src/app/hooks';
import { putLikes, selectPosts, selectStatus } from 'src/features/posts/postsEntitySlice';
import { MarkdownBlock } from 'src/components/organisms';

type Props = RouteComponentProps & {
  match: {
    params: {
      id: string;
    };
  };
};

const Detail: React.VFC<Props> = (props) => {
  const postId = props.match.params.id;
  const status = useAppSelector(selectStatus);
  const post = useAppSelector((state) => selectPosts.selectById(state, postId));
  const dispatch = useAppDispatch();
  const [disabled, setDisabled] = useState(false);
  const [popup, setPopup] = useState(false);

  const clickHandler = async () => {
    if (post && status === 'idle') {
      setDisabled(true);
      await dispatch(putLikes(post));
      setPopup(true);
      setDisabled(false);
    }
  };

  return (
    <DefaultLayout>
      {post ? (
        <MarkdownBlock
          clickHandler={clickHandler}
          disabled={disabled}
          post={post}
          popup={popup}
          setPopup={setPopup}
        />
      ) : (
        <div>該当の投稿が見つかりませんでした。</div>
      )}
    </DefaultLayout>
  );
};

export default Detail;
