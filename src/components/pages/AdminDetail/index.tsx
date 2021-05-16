import React, { useState } from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';

import { AdminLayout } from 'src/components/template';

import { useAppSelector, useAppDispatch } from 'src/app/hooks';
import {
  putLikes,
  selectStatus,
  selectPosts,
  deleteEntityPost,
  togglePublish,
} from 'src/features/posts/postsEntitySlice';

import { useToast } from 'src/hooks/useToast';
import { MarkdownBlock } from 'src/components/organisms';

type Props = RouteComponentProps & {
  match: {
    params: {
      id: string;
    };
  };
};

const AdminDetail: React.VFC<Props> = (props) => {
  const postId = Number(props.match.params.id);
  const status = useAppSelector(selectStatus);
  const post = useAppSelector((state) => selectPosts.selectById(state, postId));
  const dispatch = useAppDispatch();
  const [disabled, setDisabled] = useState(false);
  const [popup, setPopup] = useState(false);
  const history = useHistory();
  const { showToast } = useToast();

  const clickHandler = async () => {
    if (post && status === 'idle') {
      setDisabled(true);
      await dispatch(putLikes(post));
      setPopup(true);
      setDisabled(false);
    }
  };

  const editHandler = async () => {
    history.push(`/admin/posts/${postId}/edit`);
  };

  const publishToggleHandler = async () => {
    if (post && status === 'idle') {
      setDisabled(true);
      if (post.publish && window.confirm('非公開にしてもよいですか？')) {
        await dispatch(togglePublish(post));
        showToast('SUCCESS', '非公開にしました。');
      }
      if (!post.publish && window.confirm('公開してもよいですか？')) {
        await dispatch(togglePublish(post));
        showToast('SUCCESS', '公開しました。');
      }
      setDisabled(false);
    }
  };

  const deleteHandler = async () => {
    if (post && status === 'idle' && window.confirm('投稿を削除してもよいですか？')) {
      setDisabled(true);
      const resultAction = await dispatch(deleteEntityPost(postId));
      setDisabled(false);
      if (deleteEntityPost.fulfilled.match(resultAction)) {
        showToast('SUCCESS', '投稿を削除しました。');
        history.push('/admin');
      }
    }
  };

  return (
    <AdminLayout>
      {post ? (
        <MarkdownBlock
          clickHandler={clickHandler}
          editHandler={editHandler}
          deleteHandler={deleteHandler}
          publishToggleHandler={publishToggleHandler}
          disabled={disabled}
          isAdmin={true}
          post={post}
          popup={popup}
          setPopup={setPopup}
        />
      ) : (
        <div>該当の投稿が見つかりませんでした。</div>
      )}
    </AdminLayout>
  );
};

export default AdminDetail;
