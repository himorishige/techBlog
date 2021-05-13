import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'src/app/store';
import axios from 'axios';

import { Post, Posts } from 'src/types';

export type PostsState = {
  posts: Posts;
  status: 'idle' | 'loading' | 'failed';
  message: string;
};

const initialState: PostsState = {
  posts: [],
  status: 'idle',
  message: '',
};

const URL = process.env.REACT_APP_JSON_SERVER_URL || 'http://localhost:3000';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (_, thunkApi) => {
  const response = await axios.get<Posts>(`${URL}/posts`).catch((err) => {
    thunkApi.rejectWithValue(err);
    throw err;
  });
  return response.data;
});

export const putLikes = createAsyncThunk('posts/putLikes', async (postData: Post, thunkApi) => {
  const response = await axios
    .put(`${URL}/posts/${postData.id}`, {
      ...postData,
      like: postData.like + 1,
    })
    .catch((err) => {
      thunkApi.rejectWithValue(err);
      throw err;
    });

  return response.data;
});

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addLikes: (state, action: PayloadAction<number>) => {
      const target = state.posts.find((post) => post.id === action.payload);
      if (target) {
        target.like++;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
        state.message = '';
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        if (action.error.message) {
          state.message = action.error.message;
        }
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'idle';
        state.posts = action.payload;
      })
      .addCase(putLikes.pending, (state) => {
        state.status = 'loading';
        state.message = '';
      })
      .addCase(putLikes.rejected, (state, action) => {
        state.status = 'failed';
        if (action.error.message) {
          state.message = action.error.message;
        }
      })
      .addCase(putLikes.fulfilled, (state, action: PayloadAction<Post>) => {
        state.status = 'idle';
        const target = state.posts.find((post) => post.id === action.payload.id);
        if (target) {
          target.like += 1;
        }
      });
  },
});

export const { addLikes } = postsSlice.actions;

export const selectPosts = (state: RootState) => state.posts.posts;
export const selectStatus = (state: RootState) => state.posts.status;
export const selectMessage = (state: RootState) => state.posts.message;

export default postsSlice.reducer;
