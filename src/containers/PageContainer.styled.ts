import styled from 'styled-components'

import { spacing } from 'theme/utils.ts'

export const PageContainerStyled = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
  overflow-y: scroll;
  padding: ${spacing(3)} ${spacing(3.75)};
  margin: 0 auto;

  > * {
    max-width: 1238px;
  }
`
