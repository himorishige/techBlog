import postsEntityReducer from './postsEntitySlice';

describe('counter reducer', () => {
  it('should handle initial state', () => {
    expect(postsEntityReducer(undefined, { type: 'unknown' })).toEqual({
      ids: [],
      entities: {},
      status: 'idle',
      message: '',
    });
  });
});
