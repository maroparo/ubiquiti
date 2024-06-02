import styled from 'styled-components'

import { spacing } from 'theme/utils.ts'

import { SearchBoxStyled } from './SearchBox.styles.ts'

export const FiltersStyled = styled.div`
  position: sticky;
  top: 0;
  min-height: ${spacing(6)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${spacing(3.75)};
  border-bottom: 1px solid ${({ theme }) => theme.color.lightGrey3};
  background-color: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletS}) {
    flex-direction: column;
    justify-content: center;
    gap: ${spacing(1)};
    height: ${spacing(10)};

    ${SearchBoxStyled} {
      width: 100%;
    }
  }
`

export const RightAdornment = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(2)};

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletS}) {
    width: 100%;
    justify-content: space-between;
  }
`
