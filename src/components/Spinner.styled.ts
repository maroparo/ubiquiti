import styled from 'styled-components'

export type Size = 'small' | 'medium' | 'large'

const sizeMap = {
  small: {
    diameter: 16,
    borderWidth: 3,
  },
  medium: {
    diameter: 24,
    borderWidth: 4,
  },
  large: {
    diameter: 38,
    borderWidth: 5,
  },
}

export const SpinnerStyled = styled.div<{ $size: Size }>`
  margin: auto;
  width: ${({ $size }) => sizeMap[$size].diameter}px;
  height: ${({ $size }) => sizeMap[$size].diameter}px;
  border: ${({ $size }) => sizeMap[$size].borderWidth}px solid
    ${({ theme }) => theme.color.lightGrey2};
  border-bottom-color: ${({ theme }) => theme.color.primary};
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
