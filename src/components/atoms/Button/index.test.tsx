import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Button from '.';

describe('atoms/Button', () => {
  test('ボタンに渡したテキストが表示される', () => {
    render(<Button>いいね</Button>);
    expect(screen.getByRole('button').textContent).toBe('いいね');
  });
  test('mainColor、bgColorを渡した場合に反映されている', () => {
    const tree = renderer
      .create(
        <Button mainColor="white" bgColor="blue">
          いいね
        </Button>,
      )
      .toJSON();
    expect(tree).toHaveStyleRule('color', 'white');
    expect(tree).toHaveStyleRule('border', 'var(--primary-color) 2px solid');
    expect(tree).toHaveStyleRule('background-color', 'blue');
  });
  test('mainColor、bgColorを渡した場合に反映されている（記述違い）', () => {
    render(
      <Button mainColor="white" bgColor="blue">
        いいね
      </Button>,
    );
    expect(screen.getByRole('button')).toHaveStyleRule('color', 'white');
    expect(screen.getByRole('button')).toHaveStyleRule('border', 'var(--primary-color) 2px solid');
    expect(screen.getByRole('button')).toHaveStyleRule('background-color', 'blue');
  });
  test('disableを渡した場合に反映されている', () => {
    render(<Button disabled={true}>いいね</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('disabled');
  });
});
