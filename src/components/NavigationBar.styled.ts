import styled from 'styled-components'

import { FlexCenter } from 'theme/theme.ts'
import { addAlpha, spacing } from 'theme/utils.ts'

export const NavigationBarStyled = styled.nav`
  position: sticky;
  top: 0;
  padding: 0 ${spacing(3.75)};
  height: ${spacing(6)};
  border-bottom: 1px solid ${({ theme }) => theme.color.lightGrey3};
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color:  ${({ theme }) => theme.color.white};
  
  > button{
    position: absolute;
  }

  div:first-of-type {
    flex: 1;
    ${FlexCenter};

    
    span {
      font-size: ${({ theme }) => theme.fontSize.m};
      color: ${({ theme }) => addAlpha(theme.color.black, 0.45)}};
    }
  }
`
