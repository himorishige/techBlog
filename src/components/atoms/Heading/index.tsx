import React from 'react';
import styled from 'styled-components';
import { media } from 'src/styles/util';

type HeadingType = React.HTMLAttributes<HTMLHeadingElement>;

export type Props = HeadingType & {
  children: React.ReactNode;
  size?: 'large' | 'medium' | `small`;
};

const Heading: React.VFC<Props> = (props) => {
  const { children, ...args } = props;

  return <StyledHeading {...args}>{children}</StyledHeading>;
};

export default Heading;

const StyledHeading = styled.h2<Props>`
  line-height: 1.5;
  font-weight: bold;
  ${(props) => props.size === 'large' && 'font-size: 1.75rem;'}
  ${(props) => props.size === 'medium' && 'font-size: 1.5rem;'}
  ${(props) => props.size === 'small' && 'font-size: 1.25rem;'}
  ${media.phone} {
    ${(props) => props.size === 'large' && 'font-size: 1.25rem;'}
    ${(props) => props.size === 'medium' && 'font-size: 1.15rem;'}
    ${(props) => props.size === 'small' && 'font-size: 1rem;'}
  }
`;
