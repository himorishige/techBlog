import { useCallback } from 'react';
import { format } from 'date-fns';

export const useHelper = () => {
  // 少数値を任意の桁数に変換する
  const fixFloat = useCallback((num: number, fixed: number) => {
    return num.toFixed(fixed);
  }, []);

  // ミリ秒形式を任意のフォーマットに変換する
  const formatDateTime = useCallback(
    (datetime: number | undefined, formatType: string = 'yyyy/MM/dd') => {
      if (!datetime) {
        return 'error';
      }
      return format(datetime, formatType);
    },
    [],
  );

  return { formatDateTime, fixFloat };
};
