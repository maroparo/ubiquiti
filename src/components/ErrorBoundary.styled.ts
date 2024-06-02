import styled from 'styled-components'

import { spacing } from 'theme/utils.ts'

export const ErrorBoundaryStyled = styled.div`
  margin: auto;
  padding: ${spacing(4)};
  display: flex;
  gap: ${spacing(4)};

  & > div,
  img {
    flex: 1;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  img {
    display: block;
    max-width: 171px;
    max-height: 213px;
    width: auto;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletS}) {
    flex-direction: column-reverse;
    align-items: center;
  }
`
