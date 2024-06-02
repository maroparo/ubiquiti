import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { FlexCenter } from 'theme/theme.ts'
import { addAlpha, spacing } from 'theme/utils.ts'

export const ProductCardStyled = styled(Link)`
  display: flex;
  flex-direction: column;
  height: 190px;
  border: 1px solid ${({ theme }) => theme.color.lightGrey6};
  border-radius: ${({ theme }) => theme.borderRadius.m};
  overflow: hidden;

  img {
    height: 125px;
  }
`

export const ImageContainer = styled.div`
  ${FlexCenter};
  background-color: ${({ theme }) => theme.color.imageBackground};
`

export const ProductDescription = styled.div`
    flex: 1;
    padding: ${spacing(1)} ${spacing(2)};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    h3 {
      font-size: ${({ theme }) => theme.fontSize.m};
      color: ${({ theme }) => theme.color.black};
      font-weight: 400;
    }

    span {
      font-size: ${({ theme }) => theme.fontSize.s};
      color: ${({ theme }) => addAlpha(theme.color.black, 0.45)}};
    }

    h3, span {
      max-width: 100%;
      text-decoration: none;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
`
