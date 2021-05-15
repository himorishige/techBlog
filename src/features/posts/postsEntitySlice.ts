import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { RootState } from 'src/app/store';
import axios from 'axios';

import { Post, Posts } from 'src/types';

export type PostsState = {
  posts: Posts;
  status: 'idle' | 'loading' | 'failed';
  message: string;
};

const postsAdapter = createEntityAdapter<Post>();
const postInitialEntityState = postsAdapter.getInitialState({
  status: 'idle',
  message: '',
});

const URL = process.env.REACT_APP_JSON_SERVER_URL || 'http://localhost:3000';

/**
 * 投稿一覧を取得する
 */

export const fetchEntityPosts = createAsyncThunk('posts/fetchEntityPosts', async (_, thunkApi) => {
  const response = await axios.get<Posts>(`${URL}/posts`).catch((err) => {
    thunkApi.rejectWithValue(err);
    throw err;
  });
  return response.data;
});

/**
 * 投稿を追加する
 */

export const addEntityPost = createAsyncThunk(
  'posts/addEntityPost',
  async (post: Omit<Post, 'id'>, thunkApi) => {
    const response = await axios.post<Post>(`${URL}/posts`, post).catch((err) => {
      thunkApi.rejectWithValue(err);
      throw err;
    });
    return response.data;
  },
);

/**
 * 投稿を編集する
 */

export const updateEntityPost = createAsyncThunk(
  'posts/updateEntityPost',
  async (post: Post, thunkApi) => {
    const response = await axios.put<Post>(`${URL}/posts/${post.id}`, post).catch((err) => {
      thunkApi.rejectWithValue(err);
      throw err;
    });
    return response.data;
  },
);

/**
 * 投稿を削除する
 */

export const deleteEntityPost = createAsyncThunk(
  'posts/deleteEntityPost',
  async (postId: number, thunkApi) => {
    const response = await axios
      .delete<Post>(`${URL}/posts/${postId}`, {
        data: { id: postId },
      })
      .catch((err) => {
        thunkApi.rejectWithValue(err);
        throw err;
      });
    return { data: response.data, postId };
  },
);

/**
 * 該当する投稿IDにいいねを1プラスする
 */

export const putLikes = createAsyncThunk('posts/putLikes', async (postData: Post, thunkApi) => {
  const response = await axios
    .put<Post>(`${URL}/posts/${postData.id}`, {
      ...postData,
      like: postData.like + 1,
    })
    .catch((err) => {
      thunkApi.rejectWithValue(err);
      throw err;
    });

  return { id: response.data.id, like: response.data.like };
});

/**
 * 公開・非公開を切り替える
 */

export const togglePublish = createAsyncThunk(
  'posts/togglePublish',
  async (postData: Post, thunkApi) => {
    const response = await axios
      .put<Post>(`${URL}/posts/${postData.id}`, {
        ...postData,
        publish: !postData.publish,
      })
      .catch((err) => {
        thunkApi.rejectWithValue(err);
        throw err;
      });
    return { id: response.data.id, publish: response.data.publish };
  },
);

export const postsEntitySlice = createSlice({
  name: 'postsEntity',
  initialState: postInitialEntityState,
  reducers: {
    addLikes: (state, action: PayloadAction<number>) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEntityPosts.pending, (state) => {
        state.status = 'loading';
        state.message = '';
      })
      .addCase(fetchEntityPosts.rejected, (state, action) => {
        state.status = 'failed';
        if (action.error.message) {
          state.message = action.error.message;
        }
      })
      .addCase(fetchEntityPosts.fulfilled, (state, action) => {
        state.status = 'idle';
        postsAdapter.setAll(state, action.payload);
      })
      .addCase(addEntityPost.pending, (state) => {
        state.status = 'loading';
        state.message = '';
      })
      .addCase(addEntityPost.rejected, (state, action) => {
        state.status = 'failed';
        if (action.error.message) {
          state.message = action.error.message;
        }
      })
      .addCase(addEntityPost.fulfilled, (state, action) => {
        state.status = 'idle';
        postsAdapter.addOne(state, action.payload);
      })
      .addCase(updateEntityPost.pending, (state) => {
        // state.status = 'loading';
        state.message = '';
      })
      .addCase(updateEntityPost.rejected, (state, action) => {
        // state.status = 'failed';
        if (action.error.message) {
          state.message = action.error.message;
        }
      })
      .addCase(updateEntityPost.fulfilled, (state, action: PayloadAction<Post>) => {
        state.status = 'idle';
        const { id, ...updateData } = action.payload;
        postsAdapter.updateOne(state, {
          id: id,
          changes: { ...updateData },
        });
      })
      .addCase(deleteEntityPost.pending, (state) => {
        state.status = 'loading';
        state.message = '';
      })
      .addCase(deleteEntityPost.rejected, (state, action) => {
        state.status = 'failed';
        if (action.error.message) {
          state.message = action.error.message;
        }
      })
      .addCase(deleteEntityPost.fulfilled, (state, action) => {
        state.status = 'idle';
        postsAdapter.removeOne(state, action.payload.postId);
      })
      .addCase(putLikes.pending, (state) => {
        // state.status = 'loading';
        state.message = '';
      })
      .addCase(putLikes.rejected, (state, action) => {
        // state.status = 'failed';
        if (action.error.message) {
          state.message = action.error.message;
        }
      })
      .addCase(putLikes.fulfilled, (state, action: PayloadAction<{ id: number; like: number }>) => {
        state.status = 'idle';
        postsAdapter.updateOne(state, {
          id: action.payload.id,
          changes: { like: action.payload.like },
        });
      })
      .addCase(togglePublish.pending, (state) => {
        // state.status = 'loading';
        state.message = '';
      })
      .addCase(togglePublish.rejected, (state, action) => {
        // state.status = 'failed';
        if (action.error.message) {
          state.message = action.error.message;
        }
      })
      .addCase(
        togglePublish.fulfilled,
        (state, action: PayloadAction<{ id: number; publish: boolean }>) => {
          state.status = 'idle';
          postsAdapter.updateOne(state, {
            id: action.payload.id,
            changes: { publish: action.payload.publish },
          });
        },
      );
  },
});

export default postsEntitySlice.reducer;

export const selectPosts = postsAdapter.getSelectors<RootState>((state) => state.postsEntity);

export const selectStatus = (state: RootState) => state.postsEntity.status;
export const selectMessage = (state: RootState) => state.postsEntity.message;
