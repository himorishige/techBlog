import React from 'react';
import styled from 'styled-components';
import { Margin, media } from 'src/styles/util';

import { useHelper } from 'src/hooks/useHelper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';

export type Props = {
  label?: string;
  update?: boolean;
  datetime?: number;
};

const DateTime: React.VFC<Props> = ({ label, update = false }) => {
  const { formatDateTime } = useHelper();

  // todo 仮実装
  const datetime = Date.now();

  return (
    <StyledLastUpdated data-testid="detail-lastupdated">
      <Margin right="0.5rem" inline>
        {update ? <FontAwesomeIcon icon={faRetweet} /> : <FontAwesomeIcon icon={faCalendarAlt} />}
      </Margin>
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
