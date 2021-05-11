import React from 'react';
import styled from 'styled-components';
import { media } from 'src/styles/util';

import { useHelper } from 'src/hooks/useHelper';

export type Props = {
  label?: string;
  datetime?: number;
};

const DateTime: React.VFC<Props> = ({ label }) => {
  const { formatDateTime } = useHelper();

  // todo 仮実装
  const datetime = Date.now();

  return (
    <StyledLastUpdated data-testid="detail-lastupdated">
      {label}
      {formatDateTime(datetime)}
    </StyledLastUpdated>
  );
};

export default DateTime;

const StyledLastUpdated = styled.div`
  ${media.phone} {
    font-size: 0.75rem;
  }
`;
