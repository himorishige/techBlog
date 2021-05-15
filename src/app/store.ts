import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import postsReducer from 'src/features/posts/postsSlice';
import postsEntityReducer from 'src/features/posts/postsEntitySlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    postsEntity: postsEntityReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
