import styled, { css } from 'styled-components'

import { spacing } from 'theme/utils.ts'

import { IconButton } from './IconButton.tsx'

export const IconRadioButtonsStyled = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(2)};
`

export const IconButtonStyled = styled(IconButton)<{ $selected?: boolean }>`
  ${({ $selected, theme }) =>
    $selected &&
    css`
      background-color: ${theme.color.lightGrey};
    `};
`
