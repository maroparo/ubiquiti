import styled from 'styled-components'

import { spacing } from 'theme/utils.ts'

export const ProductsGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${spacing(3)};

  @media (max-width: ${({ theme }) => theme.breakpoints.laptopL}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletL}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const ProductsCount = styled.span`
  color: ${({ theme }) => theme.color.lightGrey5};
  font-size: ${({ theme }) => theme.fontSize.s};
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
`
