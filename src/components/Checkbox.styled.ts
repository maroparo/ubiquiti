import styled, { css } from 'styled-components'

import { FlexCenter } from 'theme/theme.ts'
import { spacing } from 'theme/utils'

const CheckboxDimensions = css`
  width: ${spacing(2.5)};
  height: ${spacing(2.5)};
`

export const HiddenCheckboxInput = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`

export const Container = styled.label`
  position: relative;
  display: inline-block;
  ${CheckboxDimensions};
`

export const Indicator = styled.div<{ $checked: boolean }>`
  position: absolute;
  top: 0;
  ${CheckboxDimensions};
  background: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.grey};
  border-radius: ${({ theme }) => theme.borderRadius.s};
  ${FlexCenter};

  ${({ $checked }) =>
    $checked &&
    css`
      border-color: ${({ theme }) => theme.color.primary};
      background-color: ${({ theme }) => theme.color.primary};
    `}

  ${Container}:hover & {
    background: ${({ theme }) => theme.color.lightGrey2};
    ${({ $checked }) =>
      $checked &&
      css`
        border-color: ${({ theme }) => theme.color.primaryDark};
        background-color: ${({ theme }) => theme.color.primaryDark};
      `}
  }

  &::after {
    content: '';
    position: absolute;
    display: none;
  }
`
