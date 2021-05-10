import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '.';

describe('記事詳細ページ', () => {
  test('タイトルが表示されている', () => {
    render(<Home />);
    expect(screen.getByTestId('detail-title').textContent).toBeTruthy();
  });
});
