import React from 'react';
import styled from 'styled-components';
import { media } from 'src/styles/util';

type HeadingType = React.HTMLAttributes<HTMLHeadingElement>;

export type Props = HeadingType & {
  children: React.ReactNode;
};

const Heading: React.VFC<Props> = (props) => {
  const { children, ...args } = props;

  return <StyledHeading {...args}>{children}</StyledHeading>;
};

export default Heading;

const StyledHeading = styled.h2<Props>`
  font-size: 2rem;
  ${media.phone} {
    font-size: 1.5rem;
  }
`;
