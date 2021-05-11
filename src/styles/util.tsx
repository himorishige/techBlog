import styled from 'styled-components';

/**
 * Padding Margin 汎用コンポーネント
 *
 * <Margin top="2rem" bottom="40px" right="auto" left="auto">
 *   <調整したいコンポーネント />
 * </Margin>
 */

type Props = {
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  left?: string | number;
};

export const Padding = styled.div<Props>`
  padding-top: ${(props) => props.top};
  padding-right: ${(props) => props.right};
  padding-bottom: ${(props) => props.bottom};
  padding-left: ${(props) => props.left};
`;

Padding.defaultProps = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};

export const Margin = styled.div<Props>`
  margin-top: ${(props) => props.top};
  margin-right: ${(props) => props.right};
  margin-bottom: ${(props) => props.bottom};
  margin-left: ${(props) => props.left};
`;

Margin.defaultProps = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};

/** media query
 *
 *  ${media.phone} {
 *    font-size: 1rem;
 *  }
 */

const customMediaQuery = (maxWidth: number) => `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery(922),
  tablet: customMediaQuery(768),
  phone: customMediaQuery(576),
};
