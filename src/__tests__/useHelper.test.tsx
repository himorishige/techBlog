import { renderHook } from '@testing-library/react-hooks';
import { cleanup } from '@testing-library/react';
import { useHelper } from 'src/hooks/useHelper';

afterEach(() => cleanup());

describe('useHelper/formatUnixtime', () => {
  test('1620702725375が2021/05/11に変換される', () => {
    const { result } = renderHook(() => useHelper());
    expect(result.current.formatDateTime(1620702725375)).toBe('2021/05/11');
  });
  test('値を渡さない場合errorと表示される', () => {
    const { result } = renderHook(() => useHelper());
    expect(result.current.formatDateTime(undefined)).toBe('error');
  });
});
