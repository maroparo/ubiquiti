import { render } from '@testing-library/react'
import { TestWrapper } from 'test/TestWrapper.tsx'

import { PageContainer } from './PageContainer'

describe('PageContainer', () => {
  it('should render spinner when isLoading is true', () => {
    const { getByTestId } = render(
      <TestWrapper>
        <PageContainer isLoading={true}>Test</PageContainer>
      </TestWrapper>,
    )

    expect(getByTestId('spinner')).toBeInTheDocument()
  })

  it('should render children when isLoading is false', () => {
    const { getByText } = render(
      <TestWrapper>
        <PageContainer isLoading={false}>Test</PageContainer>
      </TestWrapper>,
    )

    expect(getByText('Test')).toBeInTheDocument()
  })
})
