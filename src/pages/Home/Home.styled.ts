import styled from 'styled-components'

import { PageContainer } from 'containers/PageContainer.tsx'
import { spacing } from 'theme/utils.ts'

export const PageContainerStyled = styled(PageContainer)`
  flex-direction: column;
  align-items: center;
  gap: ${spacing(2)};
`

export const NoResults = styled.span`
  margin: auto;
  color: ${({ theme }) => theme.color.grey};
`
