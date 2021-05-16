import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AdminLayout } from 'src/components/template';

import { useAppDispatch } from 'src/app/hooks';
import { addEntityPost } from 'src/features/posts/postsEntitySlice';
import { Post } from 'src/types';

import { useToast } from 'src/hooks/useToast';

import { MarkdownEditBlock } from 'src/components/organisms';

const AdminNewPost: React.VFC = (props) => {
  const history = useHistory();
  const [markdown, setMarkdown] = useState('');
  const [title, setTitle] = useState('');
  const [disabled, setDisabled] = useState(false);
  const dispatch = useAppDispatch();
  const { showToast } = useToast();

  const inputTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const inputHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
  };

  const addHandler = async (isPublish: boolean) => {
    if (title === '') {
      alert('タイトルが未入力です。');
      return;
    }
    setDisabled(true);
    const post: Omit<Post, 'id'> = {
      createdAt: Date.now(),
      title: title,
      body: markdown,
      image: '/assets/images/dummy01.jpeg',
      like: 0,
      publish: isPublish,
    };
    const resultAction = await dispatch(addEntityPost(post));
    setDisabled(false);

    if (addEntityPost.fulfilled.match(resultAction)) {
      if (isPublish) {
        showToast('SUCCESS', '記事を公開しました。');
      } else {
        showToast('SUCCESS', '記事を下書き保存しました。');
      }
      history.push('/admin');
    }
  };

  const cancelHandler = () => {
    if (window.confirm('編集内容をキャンセルしてもよいですか？')) {
      setTitle('');
      setMarkdown('');
      history.push('/admin');
    }
  };

  return (
    <>
      <AdminLayout layout="wide">
        <MarkdownEditBlock
          title={title}
          inputTitleHandler={inputTitleHandler}
          markdown={markdown}
          inputHandler={inputHandler}
          addHandler={addHandler}
          cancelHandler={cancelHandler}
          disabled={disabled}
          isEdit={false}
        />
      </AdminLayout>
    </>
  );
};

export default AdminNewPost;
