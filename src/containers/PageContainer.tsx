import { HTMLAttributes } from 'react'

import { Spinner } from 'components/Spinner.tsx'

import { PageContainerStyled } from './PageContainer.styled.ts'

interface PageContainerProps extends HTMLAttributes<HTMLDivElement> {
  isLoading?: boolean
}

export const PageContainer = ({
  children,
  isLoading,
  ...other
}: PageContainerProps) => {
  return (
    <PageContainerStyled {...other}>
      {isLoading ? <Spinner /> : children}
    </PageContainerStyled>
  )
}
