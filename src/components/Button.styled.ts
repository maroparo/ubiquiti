import styled, { css } from 'styled-components'

import { FlexCenter } from 'theme/theme.ts'
import { spacing } from 'theme/utils.ts'

export type ButtonVariant = 'text' | 'filled' | 'outlined'

const TextButton = css`
  padding: 0;
  background-color: transparent;
  color: #00000073;
  border: none;
  &:hover {
    color: rgba(0, 0, 0, 0.81);
  }
`

const OutlinedButton = css`
  background-color: transparent;
  color: ${({ theme }) => theme.color.primary};

  &:hover {
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.white};
    border-color: transparent;
  }
`

const FilledButton = css`
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
`

export const ButtonStyled = styled.button<{
  $variant: ButtonVariant
  $isLoading: boolean
}>`
  ${FlexCenter};

  min-height: ${spacing(3)};
  padding: 0 ${spacing(1)};
  border-radius: ${({ theme }) => theme.borderRadius.s};
  border: 1px solid ${({ theme }) => theme.color.primary};
  gap: ${spacing(0.5)};

  svg {
    width: ${spacing(2)};
  }

  ${({ $variant }) => {
    switch ($variant) {
      case 'text':
        return TextButton
      case 'outlined':
        return OutlinedButton
      default:
        return FilledButton
    }
  }}

  ${({ $isLoading }) =>
    $isLoading &&
    css`
      p,
      svg {
        visibility: hidden;
      }
    `}
`

export const LoadingOverlay = styled.div`
  ${FlexCenter};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
