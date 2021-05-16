import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import postsEntityReducer from 'src/features/posts/postsEntitySlice';

export const store = configureStore({
  reducer: {
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
