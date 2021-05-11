import React from 'react';
import styled from 'styled-components';
import { media } from 'src/styles/util';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export type Props = ButtonProps & {
  children: React.ReactNode;
  mainColor?: string;
  bgColor?: string;
};

const Button: React.VFC<Props> = (props) => {
  const { children, ...args } = props;

  return <StyledButton {...args}>{children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button<Props>`
  border: none;
  min-width: 120px;
  height: 40px;
  cursor: pointer;
  font-size: 1rem;
  padding: 0 1rem;
  border: ${(props) => props.mainColor || 'var(--primary-color)'} 2px solid;
  color: ${(props) => props.mainColor || 'var(--primary-color)'};
  background-color: ${(props) => props.bgColor || 'white'};
  transition: background-color 0.5s, opacity 0.3s, color 0.3s;
  ${media.phone} {
    font-size: 0.75rem;
    padding: 0 0.75rem;
    min-width: 80px;
  }
  &:hover {
    background-color: ${(props) => props.mainColor || 'var(--primary-color)'};
    color: ${(props) => props.bgColor || 'white'};
  }
  &:active {
    opacity: 0.8;
  }
  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }
`;
