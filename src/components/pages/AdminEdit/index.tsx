import React, { useEffect, useState, useCallback, memo } from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import { AdminLayout } from 'src/components/template';

import { useAppSelector, useAppDispatch } from 'src/app/hooks';
import { selectStatus, selectPosts, updateEntityPost } from 'src/features/posts/postsEntitySlice';
import { Post } from 'src/types';

import { useToast } from 'src/hooks/useToast';

import { MarkdownEditBlock } from 'src/components/organisms';

type Props = RouteComponentProps & {
  match: {
    params: {
      id: string;
    };
  };
};

const AdminEdit: React.VFC<Props> = memo((props) => {
  const postId = Number(props.match.params.id);
  const status = useAppSelector(selectStatus);
  const post = useAppSelector((state) => selectPosts.selectById(state, postId));
  const history = useHistory();
  const [markdown, setMarkdown] = useState('');
  const [title, setTitle] = useState('');
  const [disabled, setDisabled] = useState(false);
  const dispatch = useAppDispatch();
  const { showToast } = useToast();

  const inputTitleHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }, []);

  const inputHandler = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
  }, []);

  const updateHandler = useCallback(async () => {
    if (title === '') {
      alert('タイトルが未入力です。');
      return;
    }
    if (post && status === 'idle') {
      setDisabled(true);
      const postData: Post = {
        id: post.id,
        title: title,
        createdAt: post.createdAt,
        updatedAt: Date.now(),
        body: markdown,
        image: '/assets/images/dummy01.jpeg',
        like: post.like,
        publish: post.publish,
      };
      const resultAction = await dispatch(updateEntityPost(postData));
      setDisabled(false);

      if (updateEntityPost.fulfilled.match(resultAction)) {
        showToast('SUCCESS', '更新しました。');
        history.goBack();
      }
    }
  }, [dispatch, history, markdown, post, showToast, status, title]);

  const cancelHandler = useCallback(() => {
    if (window.confirm('編集内容がキャンセルされますがよろしいですか？')) {
      history.goBack();
    }
  }, [history]);

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setMarkdown(post.body);
    }
  }, [post]);

  return (
    <>
      <AdminLayout layout="wide">
        <MarkdownEditBlock
          title={title}
          inputTitleHandler={inputTitleHandler}
          markdown={markdown}
          inputHandler={inputHandler}
          updateHandler={updateHandler}
          cancelHandler={cancelHandler}
          disabled={disabled}
          isEdit={true}
        />
      </AdminLayout>
    </>
  );
});

export default AdminEdit;
