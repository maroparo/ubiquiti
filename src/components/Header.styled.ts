import styled from 'styled-components'

import { spacing } from 'theme/utils.ts'

export const HeaderStyled = styled.header`
  display: flex;
  background-color: ${({ theme }) => theme.color.lightGrey};
  border-bottom: 1px solid ${({ theme }) => theme.color.lightGrey3};

  > div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 ${spacing(2)};

    svg:first-child {
      height: 100%;
    }

    h2,
    h3 {
      margin: 0;
      font-weight: 400;
    }

    h2 {
      color: ${({ theme }) => theme.color.grey};
      font-size: ${({ theme }) => theme.fontSize.l};
    }

    h3 {
      color: ${({ theme }) => theme.color.black};
      font-size: ${({ theme }) => theme.fontSize.m};
    }
  }
`
