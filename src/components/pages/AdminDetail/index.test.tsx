import React, { useState as useStateMock } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AdminDetail from '.';
import { store } from 'src/app/store';
import { Provider } from 'react-redux';

import data from 'src/data/sampleData.json';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

beforeEach(() => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Route component={AdminDetail} />
      </BrowserRouter>
    </Provider>,
  );
});

afterEach(() => cleanup());

describe('記事詳細ページ', () => {
  test('記事のタイトルが表示されている', () => {
    screen.debug();
    const setPostData = jest.fn();
    const setCount = jest.fn();
    //@ts-ignore
    useStateMock.mockImplementation((data: any) => [data, setPostData]);
    expect(screen.getByTestId('detail-title').textContent).toBeTruthy();
  });
  test('記事の最終更新日が表示されている', () => {
    expect(screen.getByTestId('detail-lastupdated').textContent).toBeTruthy();
  });
  test('記事のいいね数が表示されている', () => {
    expect(screen.getByTestId('like-count').textContent).toBeTruthy();
  });
  test('記事のいいねボタンが表示されている', () => {
    expect(screen.getByTestId('detail-likebutton')).toBeTruthy();
  });
  test('いいねボタンを1回押すといいねの数が1増える', () => {
    const prevState = Number(screen.getByTestId('like-count').textContent);
    const nextState = prevState + 1;
    userEvent.click(screen.getByTestId('detail-likebutton'));
    expect(screen.getByTestId('like-count').textContent).toBe(nextState.toString());
  });
  test('記事の本文が表示されている', () => {
    expect(screen.getByTestId('detail-body').textContent).toBeTruthy();
  });
});
